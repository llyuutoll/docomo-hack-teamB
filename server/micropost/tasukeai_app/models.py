from django.db import models
import numpy as np
# Create your models here.

class Komarigoto(models.Model):
    name = models.CharField(max_length = 128)
    tag = models.CharField(max_length=128)
    demand = models.CharField(max_length = 1024)
    distance = models.CharField(max_length = 32)
    price = models.CharField(max_length=32)
    status = models.CharField(max_length = 32)
    pub_year = models.CharField(max_length = 32)
    pub_month = models.CharField(max_length = 32)
    pub_day = models.CharField(max_length = 32)

    def __str__(self):
        return str(self.id)
