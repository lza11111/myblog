from django.contrib.auth.decorators import login_required
from django.shortcuts import Http404
from django.http import HttpResponseRedirect, HttpResponse, HttpResponseNotFound
from django.utils import translation
from django.shortcuts import render
from django.conf import settings
import json

def react(request):
    return render(request, 'react/index.html')