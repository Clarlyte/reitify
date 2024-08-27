from rest_framework import serializers
from .models import REITIndicator

class REITIndicatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = REITIndicator
        fields = '__all__'
