from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

class CustomUserManager(BaseUserManager): 
    def create_user(self, email, password=None, **extra_fields ): 
        if not email: 
            raise ValueError('Email is a required field')
        
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email, password=None, **extra_fields): 
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200,unique=True)
    username = models.CharField(max_length=200, null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD='email'
    REQUIRED_FIELDS =[]

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title