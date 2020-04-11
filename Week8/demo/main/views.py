from django.shortcuts import render
from django.http.request import HttpRequest
from django.http.response import HttpResponse, JsonResponse


def hello(request):
   return HttpResponse('<h1>Hi Alti</h1>')

# Create your views here.
products = [ {
   'id': i,
   'name': f'product {i}',
   'price': i * 1000
 } for i in range(5)]
def product_list(request):
   return JsonResponse(products, safe=False)

def product_detail(request, product_id):
   for product in products:
      if product['id'] == product_id:
         return JsonResponse(product)
   return JsonResponse({"Sorry"})
