from django.conf.urls import url
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

app_name = 'quiz'
urlpatterns = [
    url(r'problem/(?P<pk>[0-9]+)$',views.problem_detail),
    url(r'option/(?P<pk>[0-9]+)$',views.option_detail),
    url(r'(?P<pk>[0-9]+)$',views.quiz_detail),
    url(r'',views.quiz_list),
]

urlpatterns = format_suffix_patterns(urlpatterns)