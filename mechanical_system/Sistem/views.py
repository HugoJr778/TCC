from django.shortcuts import render


# def index(request):
#     return render('templates/index.html')
from django.http import HttpResponse

def login(request):
    return render(request,'login/login.html')
def index(request):
    return render(request,"front\index.html")