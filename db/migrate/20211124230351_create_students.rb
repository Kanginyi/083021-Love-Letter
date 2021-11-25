class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :age
      t.string :description
      t.string :song
      t.string :current_location
      t.string :location_from
      t.string :interesting_fact
      t.string :hobbies
      t.string :picture
      t.string :favorite_food
      t.string :github
      t.float :flatiron_rating
      t.belongs_to :instructor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
