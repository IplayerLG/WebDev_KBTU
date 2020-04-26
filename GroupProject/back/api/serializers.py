
from rest_framework import serializers

from api.models import User, Sale


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'name', 'card', 'cvv',)


class SaleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sale
        fields = ('id', 'company', 'deadline', 'subscribers', 'value', 'cost', 'description', 'image', 'user')

