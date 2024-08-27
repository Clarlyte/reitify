from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import REITIndicatorViewSet

router = DefaultRouter()
router.register(r'reits', REITIndicatorViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
