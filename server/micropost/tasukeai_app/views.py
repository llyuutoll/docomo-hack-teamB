from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Customer
from .serializer import CustomerSerializer
from rest_framework.decorators import action


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

    @action(detail=False, methods=["post"])
    def register(self, request):
        cusotmer = Customer()

        customer.id = request.POST['id']
        customer.name = request.POST['name']
        customer.demand = request.POST['demand']
        customer.distance = request.POST['distance']
        customer.status = request.POST['status']
        customer.pub_year = request.POST['pub_year']
        customer.pub_month = request.POST['pub_month']
        customer.pub_day = request.POST['pub_day']
        customer.save()

        serializer = self.get_serializer(customer)
        return render(request, 'thankyou.html')

'''
    @action(detail=False, methods=["post"])
    def output(self, request):
        customer_id = request.POST['customer_id']
        customer = customer.objects.get(customer_id=customer_id)

        customer.output = request.POST["output"]
        customer.summary = request.POST["summary"]
        customer.save()

        serializer = self.get_serializer(customer)
        return render(request, 'thankyou_output.html')

    @action(detail=False, methods=["get"])
    def customer_list(self, request):
        customers = customer.objects.all()
        context = {'customer_list':customers}
        return render(request, 'customer_list.html', context)

    @action(detail=False, methods=["get"])
    def output_list(self, request):
        customers = customer.objects.all()
        context = {'customer_list':customers}
        return render(request, 'output_list.html', context)

    @action(detail=False, methods=["get"])
    def feedback(self, request):
        return render(request, 'feedback_send.html')
'''
