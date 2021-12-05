class CommentsController < ApplicationController
    #   resources :comments, only: [:index, :show, :create]
    def index
        comments = Comment.all
        render json: comments
    end

    def show
        comment = Comment.find_by(id: params[:id])
        if comment
            render json: comment, status: :ok
        else
            render json: { errors: "Comment not found :^(" }, status: :not_found
        end
    end

    def create
        comment = Comment.create(comment_params)
        if comment.valid?
            render json: comment, status: :created
        else
            render json: { errors: comments.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def comment_params 
        params.permit(:name, :comment)
    end
end
