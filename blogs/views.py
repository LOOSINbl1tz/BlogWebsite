from rest_framework import viewsets,status 
from rest_framework.permissions import IsAuthenticated,AllowAny,IsAdminUser
from .serializer import BlogSaveSerializer,DeleteOwnBlogSerializer
from .models import BlogSave
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import APIException
from rest_framework.response import Response

class NoHeaderProvided(APIException):
        status_code = 400
        default_detail = 'No token is provided in the header or the header is missing.'
        default_code = 'no_header_provided'

class BlogDoesNotExists(APIException):
    status_code = 405
    default_detail = 'No blog for such user exists'
    default_code = 'blog_does_not_exists'
# Create your views here.

class BlogSaveViewSet(viewsets.ModelViewSet):
    queryset = BlogSave.objects.all()
    serializer_class = BlogSaveSerializer
    http_method_names = ['post']
    permission_classes = [IsAuthenticated]

class BlogGetViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSaveSerializer
    http_method_names = ['get']
    permission_classes = [IsAuthenticated]
    queryset = BlogSave.objects.all()
    
    
class BlogGetOwnViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSaveSerializer
    http_method_names = ['get']
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return BlogSave.objects.filter(author=user.id)
    
class BlogGetAdminViewSet(viewsets.ModelViewSet):
    serializer_class = BlogSaveSerializer
    http_method_names = ['get']
    permission_classes = [IsAdminUser]
    queryset =  BlogSave.objects.all()

class DeleteByUserViewSet(viewsets.ModelViewSet):
    serializer_class = DeleteOwnBlogSerializer
    http_method_names = ['delete']
    permission_classes = [IsAuthenticated]
    queryset = BlogSave.objects.all()

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        data = BlogSave.objects.get(id=instance.id)
        decode = JWTAuthentication().authenticate(request)
        if decode is not None:
            _ , token = decode
            if(str(token.payload['username']) == str(data.author)):
                self.perform_destroy(instance)
                return Response({"message": "Object deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            else:
                 raise BlogDoesNotExists()
        else:
            raise NoHeaderProvided()
        
class DeleteByAdminViewSet(viewsets.ModelViewSet):
    serializer_class = DeleteOwnBlogSerializer
    http_method_names = ['delete']
    permission_classes = [IsAdminUser]
    queryset = BlogSave.objects.all()

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        decode = JWTAuthentication().authenticate(request)
        if decode is not None:
            self.perform_destroy(instance)
            return Response({"message": "Object deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
        else:
            raise NoHeaderProvided()
