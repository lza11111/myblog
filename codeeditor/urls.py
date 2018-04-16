from django.conf.urls import url
from . import views

app_name = 'code'
urlpatterns = [
    url(r'^code/$',views.code,name='code'),
]