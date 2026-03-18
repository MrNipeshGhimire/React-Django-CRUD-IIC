from django.urls import path
from .views.main_view import student_view

urlpatterns = [
    path('student/',student_view)
]
