class Day < ActiveRecord::Base
  belongs_to :alarm

  attr_accessible :name, :alarm_id

end
