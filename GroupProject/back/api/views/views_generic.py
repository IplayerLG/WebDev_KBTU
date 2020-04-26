
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import Sale, User

from api.serializers import SaleSerializer, UserSerializer


class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    #permission_classes = (IsAuthenticated,)


class SaleListAPIView(generics.ListCreateAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    #permission_classes = (IsAuthenticated,)


class SaleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    #permission_classes = (IsAuthenticated,)


