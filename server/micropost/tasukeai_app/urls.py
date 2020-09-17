from rest_framework import routers
from .views import CustomerViewSet
from django.urls import path

from . import views

app_name = 'tasukeai_app'

router = routers.DefaultRouter()
router.register(r'^komarigoto', CustomerViewSet)
#型指定可能
