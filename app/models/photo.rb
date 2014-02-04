# == Schema Information
#
# Table name: photos
#
#  id                :integer          not null, primary key
#  name              :string(255)
#  description       :string(255)
#  img_url           :string(255)
#  project_id        :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  project_splash_id :integer
#

class Photo < ActiveRecord::Base
  attr_accessible :description, :img_url, :name, :project_id, :position

  belongs_to :project
  belongs_to :project_splash, 
  					 :class_name => "Project", 
  					 :foreign_key => "project_splash_id"
end
