from datetime import datetime
from django.db import models
from django import forms

from django.utils.html import mark_safe

class Book(models.Model):
    nome = models.CharField(max_length=100, unique=True, blank=False)
    categoria = models.CharField(max_length=50, blank=False)
    autor = models.CharField(max_length=125, blank=False)
    capa_do_livro = models.ImageField()
    data_de_publicacao = models.DateField(default=datetime.now, blank=False)
    quantidade_de_paginas = models.IntegerField(blank=False)

    # Valida a data de publicação onde tem de ser maior ou igual a 1500 e
    # menor ou igual a 2022
    def __str__ (self):
        if self.data_de_publicacao.year >= 1500 and self.data_de_publicacao.year <= 2022:
            return str(self.data_de_publicacao)
        else:
            raise forms.ValidationError('A data de publicação deve ser expedida entre os anos de 1500 e 2022')

    # Devolve a imagem para visualização na área de edição ou
    # visualização de um item
    def image_tag(self):
        return mark_safe('<img src="/%s" width="150" height="150" />' % (self.capa_do_livro))

    image_tag.short_description = 'Image'
                