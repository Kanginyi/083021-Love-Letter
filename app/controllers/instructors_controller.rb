class InstructorsController < ApplicationController

    def index
        instructors = Instructor.all
        render json: instructors, status: :ok
    end

    def show
        instructor = Instructor.find_by(id: params[:id])
        if instructor
            render json: instructor, status: :ok
        else
            render json: { errors: "Instructor not found :^(" }, status: :not_found
        end
    end

    


end
