class Reminder < ActiveRecord::Base
  belongs_to :alarm
  attr_accessible :reminder_hour, :reminder_minute, :call, :sms
end
