from django.contrib import admin
from .models import REITIndicator

@admin.register(REITIndicator)
class REITIndicatorAdmin(admin.ModelAdmin):
    list_display = ('name', 'ticker', 'market_cap', 'dividend_yield', 'price_to_earnings_ratio', 'update_date')
    search_fields = ('name', 'ticker')
    list_filter = ('update_date',)

# Alternatively, use the simple method:
# admin.site.register(REITIndicator)
