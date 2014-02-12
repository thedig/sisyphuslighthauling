# == Schema Information
#
# Table name: photos
#
#  id                        :integer          not null, primary key
#  name                      :string(255)
#  description               :string(255)
#  img_url                   :string(255)
#  project_id                :integer          not null
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  project_splash_id         :integer
#  position                  :float
#  attached_img_file_name    :string(255)
#  attached_img_content_type :string(255)
#  attached_img_file_size    :integer
#  attached_img_updated_at   :datetime
#

class Photo < ActiveRecord::Base
  attr_accessible :description, :img_url, :name, :project_id, :position, :attached_img

  # attr_accessible :attached_img
  has_attached_file :attached_img   #, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  # validates_attachment_content_type :attached_img, :content_type => /\Aimage\/.*\Z/
  # validates_attachment :attached_img,
  # :content_type => { :content_type => ["image/jpg", "image/gif", "image/png"] }

  belongs_to :project
  belongs_to :project_splash, 
  					 :class_name => "Project", 
  					 :foreign_key => "project_splash_id"
end
