class Changefieldinalarmdatabase < ActiveRecord::Migration
  def change
  	rename_column :alarms, :day, :reminder_type
  	rename_column :alarms, :hour_time, :alarm_hour
  	rename_column :alarms, :minute_time, :alarm_minute
  	add_column :alarms, :wakeup_hour, :string
  	add_column :alarms, :wakeup_minute, :string
  end
end
