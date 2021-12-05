class CommentSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :comment, :created_at
end
