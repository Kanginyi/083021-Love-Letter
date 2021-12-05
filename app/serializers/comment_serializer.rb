class CommentSerializer < ActiveModel::Serializer
  attributes :id, :name, :comment, :created_at
end
