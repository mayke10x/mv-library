from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static

from rest_framework import routers
from books import views

router = routers.DefaultRouter()
router.register(r'books', views.BookViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', include(router.urls))
] + static('/', document_root='')