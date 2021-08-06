from django.db import models

# Create your models here.
from django.utils import timezone

song_categories = [
    ("rock", "Rock"),
    ("classic", "Classic"),
    ("hip-hop", "Hip Hop"),
    ("r&b", "R&B"),
    ("charabia-sans-nom", "Charabia sans nom")
]


class Song(models.Model):
    title = models.CharField(max_length=122, blank=True, null=True, default="No Title")
    by = models.CharField(max_length=122, blank=True, null=True)
    category = models.CharField(max_length=122, default='uncategorized', choices=song_categories)
    '''
    Step 2.0:
        Here, you can remove the below line that will store the file in our local server, since we will now uploading it
        on IPFS.
        Then, create a new field which will be the unique hash of the mp3 file.

        Tip: don't forget to add a default value !
    '''
    file = models.FileField(upload_to='static/')

    def __str__(self):
        return f'<{self.title} by {self.by}>'
