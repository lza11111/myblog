from django.contrib import admin
from .models import Post,Tag,Category

class PostAdmin(admin.ModelAdmin):
    list_display=['title','created_time','modified_time','category','author']

class TagAdmin(admin.ModelAdmin):
    list_display=['name']

class CategoryAdmin(admin.ModelAdmin):
    list_display=['name']
    
admin.site.register(Post,PostAdmin)
admin.site.register(Tag,TagAdmin)
admin.site.register(Category,CategoryAdmin)

# Register your models here.
