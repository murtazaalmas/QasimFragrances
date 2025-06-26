from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactMessageSerializer
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.

@api_view(['POST'])
def contact_message(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()
        # Send email
        send_mail(
            subject=f"Contact Form: {instance.subject}",
            message=f"Name: {instance.name}\nEmail: {instance.email}\n\nMessage:\n{instance.message}",
            from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', 'webmaster@localhost'),
            recipient_list=[getattr(settings, 'CONTACT_EMAIL', 'your@email.com')],
            fail_silently=True,
        )
        return Response({'success': True, 'message': 'Message sent successfully!'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
