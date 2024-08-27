from django.db import models

# Create your models here.
class PortfolioPrediction(models.Model):
    user = models.ForeignKey('users.UserProfile', on_delete=models.CASCADE)
    prediction_date = models.DateTimeField(auto_now_add=True)
    portfolio_composition = models.JSONField()  # Stores AI-generated portfolio
    expected_return = models.DecimalField(max_digits=10, decimal_places=2)
    risk_assessment = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.user.username} - {self.prediction_date}"
