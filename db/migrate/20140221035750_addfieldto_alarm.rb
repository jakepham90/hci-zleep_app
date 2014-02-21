class AddfieldtoAlarm < ActiveRecord::Migration
  def change
  	add_column :alarms, :repeat_monday, :boolean
  	add_column :alarms, :repeat_tuesday, :boolean
  	add_column :alarms, :repeat_wednesday, :boolean
  	add_column :alarms, :repeat_thursday, :boolean
  	add_column :alarms, :repeat_friday, :boolean
  	add_column :alarms, :repeat_saturday, :boolean
  	add_column :alarms, :repeat_sunday, :boolean
  end
end
