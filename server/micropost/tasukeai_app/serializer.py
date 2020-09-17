from rest_framework import serializers
from .models import Komarigoto

class KomarigotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Komarigoto
        fields = ('name',)
