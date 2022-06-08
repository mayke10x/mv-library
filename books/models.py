from datetime import datetime
from django.db import models
from django import forms

from django.utils.html import mark_safe

# Valida a data de publicação onde tem de ser maior ou igual a 1500 e
# menor ou igual a 2022
def valideDate (value):
    if value.year < 1500 or value.year > 2022:
        raise forms.ValidationError('A data de publicação do livro deve está compreendida entre os anos de 1500 a 2022')

# Formata o nome do arquivo
# da capa do livro que for enviada
def format_namefile_capa(self, filename):
    return f"{self.nome}-{filename}"

class Book(models.Model):
    nome = models.CharField(max_length=100, unique=True, blank=False)
    categoria = models.CharField(max_length=50, blank=False)
    autor = models.CharField(max_length=125, blank=False)
    capa_do_livro = models.ImageField(upload_to=format_namefile_capa)
    data_de_publicacao = models.DateField(default=datetime.now, blank=False, validators=[valideDate])
    quantidade_de_paginas = models.IntegerField(blank=False)

    # Devolve a imagem para visualização na área de edição ou
    # visualização de um item
    def image_tag(self):
        if self.capa_do_livro:
            return mark_safe('<img src="/%s" width="150" height="150" />' % (self.capa_do_livro))
        else:
            return str('-')

    image_tag.short_description = 'Image'
                