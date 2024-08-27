from rest_framework import viewsets
from .models import PortfolioPrediction
from .serializers import PortfolioPredictionSerializer

class PortfolioPredictionViewSet(viewsets.ModelViewSet):
    queryset = PortfolioPrediction.objects.all()
    serializer_class = PortfolioPredictionSerializer
