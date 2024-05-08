from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
# Create your views here.


def simple_api(request):
    data = {
        "message": "Hello from Django!",
        "items": ["Item 1", "Item 2", "Item 3"],
    }
    return JsonResponse(data)


# api/views.py



def home(request):
    return HttpResponse("Welcome to the Django App!")
