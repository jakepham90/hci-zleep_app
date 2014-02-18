class Reminder < ActiveRecord::Base
  belongs_to :alarm
  belongs_to :user
  attr_accessible :reminder_hour, :reminder_minute, :call, :sms
end
