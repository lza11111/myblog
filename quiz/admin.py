# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from quiz.models import Quiz,Problem,ProblemOption
# Register your models here.

class QuizAdmin(admin.ModelAdmin):
    list_display = ['title','created_time','is_enabled']

class ProblemAdmin(admin.ModelAdmin):
    list_display = ['title','problem_type']

class ProblemOptionAdmin(admin.ModelAdmin):
    list_display = ['title']

admin.site.register(Quiz,QuizAdmin)
admin.site.register(Problem,ProblemAdmin)
admin.site.register(ProblemOption,ProblemOptionAdmin)
