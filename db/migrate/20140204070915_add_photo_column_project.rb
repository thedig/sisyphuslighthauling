class AddPhotoColumnProject < ActiveRecord::Migration
  def change
  	add_column :photos, :project_splash_id, :integer
  end
end
