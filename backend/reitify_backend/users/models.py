from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class UserProfile(AbstractUser):
    # Extend the default Django User model with additional fields if needed
    bio = models.TextField(blank=True)
    location = models.CharField(max_length=100, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    # Overriding groups and user_permissions with related_name to avoid clashes
    groups = models.ManyToManyField(
        Group,
        related_name='userprofile_groups',  # Custom related_name to avoid clash
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='userprofile_user_permissions',  # Custom related_name to avoid clash
        blank=True,
    )

    def __str__(self):
        return self.username
