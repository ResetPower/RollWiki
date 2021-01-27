from django.db import models


class Wiki(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=48)
    time = models.DateTimeField()
    author = models.CharField(max_length=48)
    lang = models.CharField(max_length=10)
    content = models.TextField()


class Doc(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=48)
    time = models.DateTimeField()
    author = models.CharField(max_length=48)
    lang = models.CharField(max_length=10)
    content = models.TextField()
