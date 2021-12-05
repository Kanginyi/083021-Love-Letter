class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :first_name, :last_name, :comment, :likes, :dislikes, :created_at
end
