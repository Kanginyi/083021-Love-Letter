class UnfortunatesController < ApplicationController
    def index
        unfortunates = Unfortunate.all
        render json: unfortunates
    end

    def show
        unfortunate = Unfortunate.find_by(id: params[:id])
        if unfortunate
            render json: unfortunate, status: :ok
        else
            render json: { errors: "Student not found :^(" }, status: :not_found
        end
    end
end
