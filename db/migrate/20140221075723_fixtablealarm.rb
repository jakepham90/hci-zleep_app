class Fixtablealarm < ActiveRecord::Migration
  def change
    change_column :alarms, :repeat_monday, :string
    change_column :alarms, :repeat_tuesday, :string
    change_column :alarms, :repeat_wednesday, :string
    change_column :alarms, :repeat_thursday, :string
    change_column :alarms, :repeat_friday, :string
    change_column :alarms, :repeat_saturday, :string
    change_column :alarms, :repeat_sunday, :string
  end
end
