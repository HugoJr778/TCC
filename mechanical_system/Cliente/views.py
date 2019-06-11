from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import *
from django.forms.models import model_to_dict



def objeto(request):
    cliente = Cliente(nome='maria')
    cliente.save()
    cliente.__dict__
    clientes =Cliente.objects.all()
    return HttpResponse(clientes)
