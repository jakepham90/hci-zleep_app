class ChangefieldinAlarm < ActiveRecord::Migration
  def change
  	rename_column :alarms, :hours, :hour_time
    rename_column :alarms, :minutes, :minute_time

  end
end
