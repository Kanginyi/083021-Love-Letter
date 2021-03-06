class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :first_name
      t.string :last_name
      t.text :comment
      t.integer :likes, null: false, default: 0
      t.integer :dislikes, null: false, default: 0
    

      t.timestamps
    end
  end
end
