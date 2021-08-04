import os

from django.http import HttpResponseRedirect, HttpResponse, Http404
from django.shortcuts import render
from django.core.paginator import Paginator

from musicshare.forms import SongUploadForm
from musicshare.models import Song


def index(request):
    songs = Song.objects.all().order_by("date_upload")
    paginator = Paginator(songs, 8)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request, 'musicshare/index.html', {"page_obj": page_obj})


def upload(request):
    """
        response = requests.post('https://ipfs.infura.io:5001/api/v0/add', files=upload_file)
    """
    if request.method == 'POST':
        form = SongUploadForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/success/')
    else:
        form = SongUploadForm()
    return render(request, 'musicshare/upload.html', {'form': form})


def success(request):
    return render(request, 'musicshare/upload_success.html', {})


def download(request, song_id):
    song = Song.objects.get(pk=song_id)
    file_path = song.file.path
    if os.path.exists(file_path):
        with song.file.open('rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/mp3")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    raise Http404
