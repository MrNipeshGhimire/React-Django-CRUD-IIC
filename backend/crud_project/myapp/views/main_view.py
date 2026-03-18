from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import Student
from ..serializers import StudentSerializer


# POST ,GET
@api_view(['POST','GET'])
def student_view(request):
    
    if request.method == 'POST':
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'msg':'Student added successfully',
                'data':serializer.data},status=status.HTTP_201_CREATED
                )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        student = Student.objects.all()
        serializer =  StudentSerializer(student, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
