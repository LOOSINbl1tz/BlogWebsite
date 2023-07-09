from django.contrib.auth.models import User
from rest_framework import serializers
from .models import BlogSave

class BlogSaveSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogSave
        fields = "__all__"