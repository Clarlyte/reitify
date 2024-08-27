from rest_framework import viewsets
from .models import REITIndicator
from .serializers import REITIndicatorSerializer

class REITIndicatorViewSet(viewsets.ModelViewSet):
    queryset = REITIndicator.objects.all()
    serializer_class = REITIndicatorSerializer
