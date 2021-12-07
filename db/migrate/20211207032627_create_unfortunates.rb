class CreateUnfortunates < ActiveRecord::Migration[6.1]
  def change
    create_table :unfortunates do |t|
      t.string :name
      t.string :picture

      t.timestamps
    end
  end
end
