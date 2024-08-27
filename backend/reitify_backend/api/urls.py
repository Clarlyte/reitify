from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PortfolioPredictionViewSet

router = DefaultRouter()
router.register(r'predictions', PortfolioPredictionViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
