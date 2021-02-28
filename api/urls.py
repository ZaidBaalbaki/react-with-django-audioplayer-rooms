from django.urls import path 
<<<<<<< HEAD
from .views import RoomView, CreateRoomView,GetRoom, JoinRoom
urlpatterns =[
    path('room',RoomView.as_view() ),
    path('create-room', CreateRoomView.as_view()),
    path('get-room',GetRoom.as_view()),
    path('join-room',JoinRoom.as_view())
=======
from .views import RoomView, CreateRoomView,GetRoom

urlpatterns =[
    path('room',RoomView.as_view() ),
    path('create-room', CreateRoomView.as_view()),
    path('get-room',GetRoom.as_view())
>>>>>>> d0778e282c5d291803693f3c4c6c82e00954b720
]