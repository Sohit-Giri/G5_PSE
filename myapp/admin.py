from django.contrib import admin
from .models import Course, Resource, Quiz, Forum, Enrollment, PaymentScreenshot, UserProfile

class EnrollmentAdmin(admin.ModelAdmin):
    list_display = ('course', 'user', 'date_enrolled')
    search_fields = ('course__title', 'user__username')

class PaymentScreenshotAdmin(admin.ModelAdmin):
    list_display = ('user', 'course', 'screenshot')
    search_fields = ('user__username', 'course__title')

class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'instructor', 'duration', 'students_count', 'price', 'is_free')
    search_fields = ('title', 'instructor')
    list_filter = ('is_free',)

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'url')
    search_fields = ('title', 'course__title')

class QuizAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'url')
    search_fields = ('title', 'course__title')

class ForumAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'url', 'user')
    search_fields = ('title', 'course__title', 'user__username')

# Register the models with their corresponding admin classes
admin.site.register(Enrollment, EnrollmentAdmin)
admin.site.register(PaymentScreenshot, PaymentScreenshotAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Resource, ResourceAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(Forum, ForumAdmin)
