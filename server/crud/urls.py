
from django.urls import path
from .views import *


urlpatterns = [

    path('article/', GenericAPIView.as_view()),
    path('article/<int:id>/', GenericAPIView.as_view()),
]


