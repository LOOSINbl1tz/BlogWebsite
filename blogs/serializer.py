from django.contrib.auth.models import User
from rest_framework import serializers
from .models import BlogSave

class BlogSaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogSave
        fields = "__all__"