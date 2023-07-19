from rest_framework import serializers
from django.contrib.auth.models import User


from rest_framework_simplejwt.serializers import TokenObtainPairSerializer, TokenObtainSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields= ('username','first_name','last_name','email','id')

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UserGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # fields = ('id','username','first_name','email')
        fields = ('id',)



    
    




   
    
