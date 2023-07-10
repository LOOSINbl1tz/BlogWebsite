from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated,AllowAny
from .serializer import  UserSerializer,UserGetSerializer
from rest_framework import viewsets 

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    http_method_names = ['post']

class UserGetViewSet(viewsets.ModelViewSet):
    serializer_class = UserGetSerializer
    # http_method_names = ['get']
    permission_classes = [AllowAny]
    queryset = User.objects.all()

    # def get_queryset(self):
    #     user = self.request.user
    #     return User.objects.filter(id=user.id)