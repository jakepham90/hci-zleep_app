class Fixthealarmtable < ActiveRecord::Migration
  def change
  	  	rename_column :alarms, :alarm_ampm, :sleeping_ampm

  end
end
