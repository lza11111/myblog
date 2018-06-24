from rest_framework import serializers
from quiz.models import Quiz,Problem,ProblemOption,QuizResult,Score,ReviewGroup

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'

class QuizDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'
        depth = 3

class ProblemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Problem
        fields = '__all__'
        
class ProblemOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProblemOption
        fields = '__all__'


class QuizResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuizResult
        fields = '__all__'
