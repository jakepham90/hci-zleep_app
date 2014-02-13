class ChangeAlarmTable < ActiveRecord::Migration
  def change
    rename_column :alarms, :time, :hours
    add_column :alarms, :minutes, :string
    add_column :alarms, :is_dismiss, :string
    add_column :alarms, :reminder_time, :string

  end
end
