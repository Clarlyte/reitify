from django.db import models

# Create your models here.
class REITIndicator(models.Model):
    name = models.CharField(max_length=255)
    ticker = models.CharField(max_length=10, unique=True)
    market_cap = models.DecimalField(max_digits=15, decimal_places=2)
    dividend_yield = models.DecimalField(max_digits=5, decimal_places=2)
    price_to_earnings_ratio = models.DecimalField(max_digits=5, decimal_places=2)
    update_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name} ({self.ticker})"
