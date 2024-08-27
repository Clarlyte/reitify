from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserProfile

@admin.register(UserProfile)
class UserProfileAdmin(UserAdmin):
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('bio', 'location', 'birth_date')}),
    )
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('username', 'email', 'first_name', 'last_name')

# Alternatively, if you don't need to customize:
# admin.site.register(UserProfile, UserAdmin)
