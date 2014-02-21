class Addwakeupampmtoalarm < ActiveRecord::Migration
  def change
  	rename_column :alarms, :ampm, :alarm_ampm
  	add_column :alarms, :wakeup_ampm, :string
  end
end
