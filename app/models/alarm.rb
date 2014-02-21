class Alarm < ActiveRecord::Base
  belongs_to :user
  has_many :reminders
  has_many :days
 
end
