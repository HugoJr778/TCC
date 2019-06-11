from django.db import models
from Cliente.models import *
class Pedido(models.Model):
    nome =models.FloatField()
    cliente_id = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    def __str__(self):
        return self.cliente_id + self.nome

