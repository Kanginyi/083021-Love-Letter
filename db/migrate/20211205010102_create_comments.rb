class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :first_name
      t.string :last_name
      t.text :comment
      t.integer :likes
      t.integer :dislikes
    

      t.timestamps
    end
  end
end
