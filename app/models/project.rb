# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  name        :string(255)
#  description :string(255)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ActiveRecord::Base
  attr_accessible :description, :name

  has_many :photos, :dependent => :destroy
  # accepts_nested_attributes_for :photos, allow destroy => true
  has_one :splash_photo, 
  				:class_name => "Photo", 
  				:foreign_key => "project_splash_id"
end
