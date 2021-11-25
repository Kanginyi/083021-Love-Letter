class StudentSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :description, :song, :current_location, :location_from, :interesting_fact, :hobbies, :picture, :favorite_food, :github, :flatiron_rating
  has_one :instructor, serializer: StudentInstructorNameSerializer
end
