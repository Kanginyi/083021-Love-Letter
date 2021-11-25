class InstructorSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :description, :song, :current_location, :location_from, :interesting_fact, :hobbies, :picture, :favorite_food, :github, :years_worked
  has_many :students, serializer: InstructorStudentNamesSerializer
end
