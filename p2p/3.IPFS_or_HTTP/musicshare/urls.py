from django.urls import path
from django.conf.urls.static import static

from music_share_project import settings
from . import views

app_name = 'musicshare'
urlpatterns = [
        path('', views.index, name="index"),
        path('upload/', views.upload, name="upload"),
        path(r'download/(?<song_id>[0-9]+)$', views.download, name="download"),
        path('success/', views.success, name="success"),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
