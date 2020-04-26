# from rest_framework import status
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
#
# from api.models import User
# from api.serializers import UserSerializer
#
# from api.models import Sale
# from api.serializers import SaleSerializer
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def user_detail(request, user_id):
#     try:
#         user = User.objects.get(id=user_id)
#     except User.DoesNotExist as e:
#         return Response({'error': str(e)})
#
#     if request.method == 'GET':
#         serializer = UserSerializer(user)
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         serializer = UserSerializer(instance=user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response({'error': serializer.errors})
#
#     elif request.method == 'DELETE':
#         user.delete()
#         return Response({'deleted': True})
#
# @api_view(['GET', 'POST'])
# def sale_list(request):
#     if request.method == 'GET':
#         sales = Sale.objects.all()
#         serializer = SaleSerializer(sales, many=True)
#
#         return Response(serializer.data)
#
#     elif request.method == 'POST':
#         serializer = SaleSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response({'error': serializer.errors},
#                         status=status.HTTP_500_INTERNAL_SERVER_ERROR)
#
#
# @api_view(['GET', 'PUT', 'DELETE'])
# def sale_detail(request, sale_id):
#     try:
#         sale = Sale.objects.get(id=sale_id)
#     except Sale.DoesNotExist as e:
#         return Response({'error': str(e)})
#
#     if request.method == 'GET':
#         serializer = UserSerializer(sale)
#         return Response(serializer.data)
#
#     elif request.method == 'PUT':
#         serializer = SaleSerializer(instance=sale, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response({'error': serializer.errors})
#
#     elif request.method == 'DELETE':
#         sale.delete()
#         return Response({'deleted': True})
#
