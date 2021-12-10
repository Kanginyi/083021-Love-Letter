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

    # Handle Likes
    def get_likes
        comment = Comment.find_by(id: params[:id])
        render json: comment
    end

    def increment_likes
        comment = Comment.find_by(id: params[:id])
        comment.update(likes: comment.likes + 1)
        render json: comment
    end

    def increment_dislikes
        comment = Comment.find_by(id: params[:id])
        comment.update(dislikes: comment.dislikes + 1)
        render json: comment
    end

    def decrement_likes
        comment = Comment.find_by(id: params[:id])
        comment.update(likes: comment.likes - 1)
        render json: comment
    end

    def decrement_dislikes
        comment = Comment.find_by(id: params[:id])
        comment.update(dislikes: comment.dislikes - 1)
        render json: comment
    end

    private
    def comment_params 
        params.permit(:first_name, :last_name, :comment, :likes, :dislikes)
    end
end