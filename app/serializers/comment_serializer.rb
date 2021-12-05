class CommentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :comment, :likes, :dislikes, :created_at
end
