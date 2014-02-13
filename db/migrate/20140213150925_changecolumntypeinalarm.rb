class Changecolumntypeinalarm < ActiveRecord::Migration
  def change
  	   change_column :alarms, :hour_time, :string
  end
end
