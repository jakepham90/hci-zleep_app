class AddSleepReminderTimeUnitToAlarms < ActiveRecord::Migration
  def change
    add_column :alarms, :sleep_reminder_time_unit, :string
  end
end
