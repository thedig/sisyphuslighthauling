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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
