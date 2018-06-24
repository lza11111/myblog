# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class ProblemOption(models.Model):
    title = models.CharField(max_length = 100)
    def __unicode__(self):
        return u'%d.%s' % (self.id,self.title)

class Problem(models.Model):
    title = models.CharField(max_length = 500)
    description = models.TextField(null = True, blank = True)
    problem_type = models.IntegerField()
    problem_option = models.ManyToManyField(ProblemOption)
    true_answer = models.CharField(max_length = 100, null = True)
    analysis = models.TextField()
    def __unicode__(self):
        return u'%d.%s' % (self.id,self.title)

class Quiz(models.Model):
    title = models.CharField(max_length = 100)
    description = models.TextField(null = True, blank = True)
    created_time = models.DateTimeField(auto_now_add=True)
    is_enabled = models.BooleanField(default = False)
    problem = models.ManyToManyField(Problem)

    class Meta:
        ordering = ('-created_time',)

        
class Score(models.Model):
    problem = models.ForeignKey(Problem)
    quiz = models.ForeignKey(Quiz)

class QuizResult(models.Model):
    user = models.CharField(max_length = 100)
    quiz = models.ForeignKey(Quiz)
    answer = models.TextField()
    score = models.IntegerField()
    reviewer = models.ForeignKey(User)
    is_reviewed = models.BooleanField(default = False)

class ReviewGroup(models.Model):
    mentor = models.ForeignKey(User)
    user = models.TextField()
    
    
    
