from datetime import datetime

from django.db import models


# Create your models here.
class User(models.Model):
  name = models.CharField(max_length=300)
  card = models.CharField(max_length=300)
  cvv = models.IntegerField(default=123)

  def to_json(self):
    return {
      'id': self.id,
      'name': self.name,
      'card': self.card,
      'cvv': self.cvv,
    }


class Sale(models.Model):
  company = models.CharField(max_length=300)
  deadline = models.IntegerField(default=7)
  subscribers = models.IntegerField(default=300)
  value = models.IntegerField(default=300)
  cost = models.IntegerField(default=300)
  description = models.TextField(default='')
  user = models.IntegerField(default=0)
  image = models.TextField(default='')

  def to_json(self):
    return {
      'company': self.company,
      'deadline': self.deadline,
      'subscribers': self.subscribers,
      'value': self.value,
      'cost': self.cost,
      'description': self.description,
      'image': self.image,
      'user' : self.user
    }
