from django.db import models

# Create your models here.
class Investment(models.Model):
    user = models.ForeignKey('users.UserProfile', on_delete=models.CASCADE)
    reit = models.ForeignKey('core.REITIndicator', on_delete=models.CASCADE)
    amount_invested = models.DecimalField(max_digits=15, decimal_places=2)
    purchase_date = models.DateTimeField()
    shares_held = models.DecimalField(max_digits=15, decimal_places=4)
    current_value = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return f"{self.user.username} - {self.reit.name}"
