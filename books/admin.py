from django.contrib import admin
from .models import Book

class Books(admin.ModelAdmin):
    list_display = ('id', 'nome', 'categoria', 'autor', 'data_de_publicacao')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'categoria', 'autor', 'data_de_publicacao',)
    list_per_page = 20
    readonly_fields = ('image_tag',)

admin.site.register(Book, Books)