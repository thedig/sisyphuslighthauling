class AddPosiitonColumntoPhoto < ActiveRecord::Migration
  def change
  	add_column :photos, :position, :float
  end
end
