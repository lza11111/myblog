from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

class Category(models.Model):
    name = models.CharField(max_length = 100)
    objects = models.Manager()
    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length = 100)
    objects = models.Manager()
    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length = 70)
    body = models.TextField()
    created_time = models.DateTimeField(auto_now_add=True)
    modified_time = models.DateTimeField()
    excerpt = models.CharField(max_length = 200, blank = True)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, blank = True)
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    views = models.PositiveIntegerField(default=0)
    objects = models.Manager()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:detail',kwargs={'pk':self.pk})

    def increase_views(self):
        self.views += 1
        self.save(update_fields=['views'])

    class Meta:
        ordering = ['-created_time']

class Quote(models.Model):
    title = models.CharField(max_length = 100)
    now = models.PositiveIntegerField(default = 0)
    aim = models.PositiveIntegerField(default = 1)
    complete_time = models.DateTimeField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-complete_time']

