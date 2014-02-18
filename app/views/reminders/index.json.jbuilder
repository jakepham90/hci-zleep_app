json.array!(@reminders) do |reminder|
  json.extract! reminder, :id, :alarm_id, :user_id, :reminder_hour, :reminder_minute, :call, :sms
  json.url reminder_url(reminder, format: :json)
end
