from django.shortcuts import render

# Create your views here.

def code(request):
    return render(request,"codeeditor/code.html")
