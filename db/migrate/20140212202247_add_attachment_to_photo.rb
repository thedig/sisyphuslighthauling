class AddAttachmentToPhoto < ActiveRecord::Migration
  def self.up
    add_attachment :photos, :attached_img
  end

  def self.down
    remove_attachment :photos, :attached_img
  end
end
