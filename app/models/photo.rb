class Photo < ActiveRecord::Base
  attr_accessible :description, :img_url, :name, :project_id

  belongs_to :project
end
