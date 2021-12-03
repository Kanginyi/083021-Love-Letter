class CreatePlaylist < ActiveRecord::Migration[6.1]
  def change
    create_table :playlists do |t|
      t.integer :likes, null: false, default: 0
      t.integer :dislikes, null: false, default: 0

      t.timestamps
    end
  end
end
