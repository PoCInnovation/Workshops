import os

from django.http import HttpResponseRedirect, HttpResponse, Http404
from django.shortcuts import render
from django.core.paginator import Paginator

from musicshare.forms import SongUploadForm
from musicshare.models import Song


def index(request):
    songs = Song.objects.all().order_by("id")
    paginator = Paginator(songs, 8)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'musicshare/index.html', {"page_obj": page_obj})


def upload(request):
    if request.method == 'POST':
        form = SongUploadForm(request.POST, request.FILES)
        if form.is_valid():
            '''
            Step 2.0:
                Here, you can connect / send a request to ipfs.infura API with "/add" method.
                The API will respond with the corresponding hash of the file uploaded.
                Don't forget to create a new Song object and store the hash !
            '''
            Song.objects.create(title=form.cleaned_data['title'],
                                by=form.cleaned_data['by'],
                                category=form.cleaned_data['category'],
                                file=form.cleaned_data['file'])
            return HttpResponseRedirect('/success/')
    else:
        form = SongUploadForm()
    return render(request, 'musicshare/upload.html', {'form': form})


def success(request):
    return render(request, 'musicshare/upload_success.html', {})


def download(request, song_id):
    song = Song.objects.get(pk=song_id)
    '''
    Step 2.1:
        As in the previous step, you have to connect again to ipfs.infura, and request your file with the cat method.
        Give the hash of the song ; that way, the API will know which file you are talking about.
    '''
    file_path = song.file.path
    if os.path.exists(file_path):
        with song.file.open('rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/mp3")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    raise Http404
