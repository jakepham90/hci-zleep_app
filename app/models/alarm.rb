class Alarm < ActiveRecord::Base
  belongs_to :user

  attr_accessible :title, :alarm_type, :hour_time, :minute_time, :is_dismiss, :reminder_time, :day, :ampm

end
