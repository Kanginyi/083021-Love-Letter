class CreateInstructors < ActiveRecord::Migration[6.1]
  def change
    create_table :instructors do |t|
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
      t.float :years_worked

      t.timestamps
    end
  end
end
