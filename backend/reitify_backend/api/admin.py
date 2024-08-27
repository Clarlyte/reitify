from django.contrib import admin
from .models import PortfolioPrediction

@admin.register(PortfolioPrediction)
class PortfolioPredictionAdmin(admin.ModelAdmin):
    list_display = ('user', 'prediction_date', 'expected_return', 'risk_assessment')
    search_fields = ('user__username', 'risk_assessment')
    list_filter = ('prediction_date', 'risk_assessment')

# Alternatively, you can use the simple register method:
# admin.site.register(PortfolioPrediction)
