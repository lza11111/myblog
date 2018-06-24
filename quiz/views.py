# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from rest_framework import status,viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from quiz.models import Quiz,Problem,ProblemOption,QuizResult,Score,ReviewGroup
from quiz.serializers import QuizSerializer,QuizDetailSerializer,ProblemSerializer,ProblemOptionSerializer,QuizResultSerializer

# Create your views here.
@api_view(['GET','POST'])
def quiz_list(request):
    if request.method == 'GET':
        quiz_queryset_json = QuizSerializer(Quiz.objects.all(),many = True)
        return Response(quiz_queryset_json.data)
    elif request.method == 'POST':
        quiz_add_obj = QuizSerializer(data = request.data)
        if quiz_add_obj.is_valid():
            quiz_add_obj.save()
            return Response(quiz_add_obj.data, status=status.HTTP_201_CREATED)
        else:
            return Response(quiz_add_obj.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT','DELETE'])
def quiz_detail(request,pk):
    try:
        quiz = Quiz.objects.get(pk = pk)
    except Quiz.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        quiz_json = QuizDetailSerializer(quiz)
        return Response(quiz_json.data)
    elif request.method == 'PUT':
        quiz_obj = QuizDetailSerializer(quiz,data = request.data)
        if quiz_obj.is_valid():
            quiz_obj.save()
            return Response(request.data)
        else:
            return Response(quiz_obj.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        quiz.delete()
        return Response(status = status.HTTP_204_NOT_CONTENT)

@api_view(['GET','PUT','DELETE'])
def problem_detail(request,pk):
    try:
        problem = Problem.objects.get(pk = pk)
    except Problem.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        problem_json = ProblemSerializer(problem)
        return Response(problem_json.data)
    elif request.method == 'PUT':
        problem_obj = ProblemSerializer(problem,data = request.data)
        if problem_obj.is_valid():
            problem_obj.save()
            return Response(request.data)
        else:
            return Response(problem_obj.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        problem.delete()
        return Response(status = status.HTTP_204_NOT_CONTENT)

@api_view(['GET','PUT','DELETE'])
def option_detail(request,pk):
    try:
        option = ProblemOption.objects.get(pk = pk)
    except ProblemOption.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        option_json = ProblemOptionSerializer(option)
        return Response(option_json.data)
    elif request.method == 'PUT':
        option_obj = ProblemOptionSerializer(option,data = request.data)
        if option_obj.is_valid():
            option_obj.save()
            return Response(request.data)
        else:
            return Response(option_obj.errors, status = status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        option.delete()
        return Response(status = status.HTTP_204_NOT_CONTENT)

# class QuizViewSet(viewsets.ModelViewSet):
#     def get_serializer_class(self):
#         param = self.request.query_params.get('pattern','')
#         if param == 'detail':
#             return QuizDetailSerializer
#         else return QuizSerializer