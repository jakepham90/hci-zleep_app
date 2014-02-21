class Changealarmtableagain < ActiveRecord::Migration
  def change
  	rename_column :alarms, :alarm_hour, :sleeping_hour
  	rename_column :alarms, :alarm_minute, :sleeping_minute
  	rename_column :alarms, :alarm_type, :wakeup_reminder_type
  	rename_column :alarms, :reminder_time, :sleep_reminder_time
  	rename_column :alarms, :reminder_type, :sleep_reminder_type


  end
end
