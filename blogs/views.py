from rest_framework import viewsets,status 
from rest_framework.permissions import IsAuthenticated,AllowAny
from .serializer import BlogGetSerializer, BlogSaveSerializer
from .models import BlogSave

# Create your views here.
class BlogSaveViewSet(viewsets.ModelViewSet):
    queryset = BlogSave.objects.all()
    serializer_class = BlogSaveSerializer
    http_method_names = ['post']
    permission_classes = [IsAuthenticated]

class BlogGetViewSet(viewsets.ModelViewSet):
    serializer_class = BlogGetSerializer
    http_method_names = ['get']
  #  permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return BlogSave.objects.all()
    
class BlogGetOwnViewSet(viewsets.ModelViewSet):
    serializer_class = BlogGetSerializer
    http_method_names = ['get']
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return BlogSave.objects.filter(author=user.id)
    
