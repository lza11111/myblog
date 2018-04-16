from django.contrib import admin
from django.utils.text import capfirst  
from collections import OrderedDict
from .models import Post,Tag,Category,Quote

def find_model_index(name):  
    count = 0  
    for model, _ in admin.site._registry.items():  
        if capfirst(model._meta.verbose_name_plural) == name:  
            return count  
        else:  
            count += 1  
    return count  
          
def index_decorator(func):  
    def inner(*args, **kwargs):  
        templateresponse = func(*args, **kwargs)  
        for app in templateresponse.context_data['app_list']:  
            app['models'].sort(key=lambda x: find_model_index(x['name']))  
        return templateresponse  
    return inner  
  
registry = OrderedDict()  
registry.update(admin.site._registry)  
admin.site._registry = registry  
admin.site.index = index_decorator(admin.site.index)  
admin.site.app_index = index_decorator(admin.site.app_index)  

class PostAdmin(admin.ModelAdmin):
    list_display=['title','created_time','modified_time','category','author']

class TagAdmin(admin.ModelAdmin):
    list_display=['name']

class CategoryAdmin(admin.ModelAdmin):
    list_display=['name']
    
class QuoteAdmin(admin.ModelAdmin):
    list_display=['title','now','aim','complete_time']

admin.site.register(Post,PostAdmin)
admin.site.register(Tag,TagAdmin)
admin.site.register(Category,CategoryAdmin)
admin.site.register(Quote,QuoteAdmin)
# Register your models here.
