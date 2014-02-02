class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.integer :project_id, :null => false

      t.timestamps
    end
  end
end
