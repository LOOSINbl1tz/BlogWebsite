from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogGetOwnViewSet, BlogSaveViewSet, BlogGetViewSet,DeleteByUserViewSet

router = DefaultRouter()
router.register('save',BlogSaveViewSet)
router.register('getblogs',BlogGetViewSet,basename='GetBlogs')
router.register('getownblogs', BlogGetOwnViewSet, basename = 'GetOwnBlog')
router.register('delete',DeleteByUserViewSet,basename='deletebyuser')

urlpatterns = [
    path('', include(router.urls)),
]