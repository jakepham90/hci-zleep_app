class Changetypenameinalarm < ActiveRecord::Migration
  def change
  	  	rename_column :alarms, :type, :alarm_type
  end
end
