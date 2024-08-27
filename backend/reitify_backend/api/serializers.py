from rest_framework import serializers
from .models import PortfolioPrediction

class PortfolioPredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioPrediction
        fields = '__all__'  # You can specify fields explicitly if needed
