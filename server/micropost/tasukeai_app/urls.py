from rest_framework import routers
from .views import KomarigotoViewSet
from django.urls import path

from . import views

app_name = 'tasukeai_app'

router = routers.DefaultRouter()
router.register(r'^komarigoto', KomarigotoViewSet)
#型指定可能
