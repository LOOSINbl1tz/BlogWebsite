from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from .serializer import  UserSerializer
from rest_framework import viewsets 
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]




