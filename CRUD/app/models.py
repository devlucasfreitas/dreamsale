from django.db import models

# Create your models here.

class Clientes(models.Model):
    Nome = models.CharField(max_length=150)
    Email = models.CharField(max_length=50)
    Telefone = models.CharField(max_length=11)
    Senha = models.CharField(max_length=20)
