from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogGetUserViewSet, BlogSaveViewSet, BlogGetViewSet,DeleteByUserViewSet

router = DefaultRouter()
router.register('save',BlogSaveViewSet)
router.register('getblogs',BlogGetViewSet,basename='GetBlogs')
router.register('getuserblogs', BlogGetUserViewSet, basename = 'GetUserBlogs')
router.register('delete',DeleteByUserViewSet,basename='deletebyuser')

urlpatterns = [
    path('', include(router.urls)),
]