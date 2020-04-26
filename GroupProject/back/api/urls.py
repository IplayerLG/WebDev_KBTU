
from django.contrib import admin
from django.urls import path, include

from rest_framework_jwt.views import obtain_jwt_token

from api.views.views_generic import UserDetailAPIView, \
  SaleListAPIView, SaleDetailAPIView

urlpatterns = [
    path('login/', obtain_jwt_token),

    path('user/<int:pk>/', UserDetailAPIView.as_view()),

    path('sales/', SaleListAPIView.as_view()),
    path('sales/<int:pk>/', SaleDetailAPIView.as_view()),
]
