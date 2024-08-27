from django.contrib import admin
from .models import Investment

@admin.register(Investment)
class InvestmentAdmin(admin.ModelAdmin):
    list_display = ('user', 'reit', 'amount_invested', 'purchase_date', 'shares_held', 'current_value')
    search_fields = ('user__username', 'reit__name')
    list_filter = ('purchase_date',)

# Alternatively, use the simple method:
# admin.site.register(Investment)
