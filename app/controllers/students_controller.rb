class StudentsController < ApplicationController

    def index
        students = Student.all
        render json: students, status: :ok
    end

    def show
        student = Student.find_by(id: params[:id])
        if student
            render json: student, status: :ok
        else
            render json: { errors: "Student not found :^(" }, status: :not_found
        end
    end

end
