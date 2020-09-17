from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Komarigoto
from .serializer import KomarigotoSerializer
from rest_framework.decorators import action


class KomarigotoViewSet(viewsets.ModelViewSet):
    queryset = Komarigoto.objects.all()
    serializer_class = KomarigotoSerializer

    @action(detail=False, methods=["post"])
    def register(self, request):
        komarigogo = Komarigoto()

        komarigoto.name = request.POST['name']
        komarigoto.tag = request.POST['tag']
        komarigoto.demand = request.POST['demand']
        komarigoto.distance = request.POST['distance']
        komarigoto.price = request.POST['price']
        komarigoto.status = request.POST['status']

        serializer = self.get_serializer(komarigoto)
        return render(request, 'komarigoto_list.html')

    @action(detail=False, methods=["post"])
    def demand_post(self, request):
        komarigogo = Komarigoto()

        komarigoto.name = request.POST['name']
        komarigoto.tag = request.POST['tag']
        komarigoto.demand = request.POST['demand']
        komarigoto.distance = 1000
        komarigoto.price = request.POST['price']
        komarigoto.status = 1

        serializer = self.get_serializer(komarigoto)
        return render(request, 'komarigoto_list.html')

    @action(detail=False, methods=["post"])
    def chat(self, request):
        komarigoto_id = request.GET['komarigoto_id']
        komarigoto = Komarigoto.objects.get(id=komarigoto_id)

        komarigoto.status = 2
        komarigoto.save()

        serializer = self.get_serializer(komarigoto)
        return render(request, 'chat.html')

    @action(detail=False, methods=["post"])
    def solved(self, request):
        komarigoto_id = request.GET['komarigoto_id']
        komarigoto = Komarigoto.objects.get(id=komarigoto_id)

        komarigoto.status = 3
        komarigoto.save()

        serializer = self.get_serializer(komarigoto)
        return render(request, 'chat.html')

    @action(detail=False, methods=["get"])
    def komarigoto_list(self, request):
        komarigotos = Komarigoto.objects.all()
        context = {'komarigoto_list':komarigotos}
        return render(request, 'komarigoto_list.html', context)



'''
    @action(detail=False, methods=["post"])
    def output(self, request):
        komarigoto_id = request.POST['komarigoto_id']
        komarigoto = komarigoto.objects.get(komarigoto_id=komarigoto_id)

        komarigoto.output = request.POST["output"]
        komarigoto.summary = request.POST["summary"]
        komarigoto.save()

        serializer = self.get_serializer(komarigoto)
        return render(request, 'thankyou_output.html')

    @action(detail=False, methods=["get"])
    def komarigoto_list(self, request):
        komarigotos = komarigoto.objects.all()
        context = {'komarigoto_list':komarigotos}
        return render(request, 'komarigoto_list.html', context)

    @action(detail=False, methods=["get"])
    def output_list(self, request):
        komarigotos = komarigoto.objects.all()
        context = {'komarigoto_list':komarigotos}
        return render(request, 'output_list.html', context)

    @action(detail=False, methods=["get"])
    def feedback(self, request):
        return render(request, 'feedback_send.html')
'''
