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
    file = models.FileField(upload_to='static/')
    date_upload = models.DateField(default=timezone.now())

    def __str__(self):
        return f'<{self.title} by {self.by}>'
