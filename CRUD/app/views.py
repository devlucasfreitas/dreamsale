from django.shortcuts import render, redirect
from app.forms import ClientesForm
from app.models import Clientes
from django.core.paginator import Paginator

# Create your views here.
def home(request):
    data = {}
    search = request.GET.get('search')
    if search:
        data['db'] = Clientes.objects.filter(Nome__icontains=search)
    else:
         data['db'] = Clientes.objects.all()

    return render(request, 'index.html', data)

def form(request):
    data = {}
    data['form'] = ClientesForm()
    return render(request, 'form.html', data)

def create(request):
    form = ClientesForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('home')

def view(request, pk):
    data = {}
    data['db'] = Clientes.objects.get(pk=pk)
    return render(request, 'view.html', data)

def edit(requeste, pk):
    data = {}
    data['db'] = Clientes.objects.get(pk=pk)
    data['form'] = ClientesForm(instance=data['db'])
    return render(requeste, 'form.html', data)

def update(request, pk):
    data = {}
    data ['db'] = Clientes.objects.get(pk=pk)
    form = ClientesForm(request.POST or None, instance=data['db']) #COM A INSTANCIA O DJANGO RECONHECE QUE DEVE FAZER O UPDATE DO OBJETO QUE ESTA NO BANCO DE DADOS#
    if form.is_valid():
        form.save()
        return redirect('home')

def delete(request, pk):
    db = Clientes.objects.get(pk=pk)
    db.delete()
    return redirect('home')