from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogSaveViewSet, BlogGetViewSet
router = DefaultRouter()
router.register('save',BlogSaveViewSet)
router.register('getblog',BlogGetViewSet,basename='GetBlog')

urlpatterns = [
    path('', include(router.urls)),
]