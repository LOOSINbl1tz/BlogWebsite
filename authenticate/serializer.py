from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields= ('username','first_name','last_name','email','password')

    def create(self, validated_data):
        print(validated_data)
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user
    
class UserGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','first_name','email')


    
    




   
    
