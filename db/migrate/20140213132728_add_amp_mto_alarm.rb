class AddAmpMtoAlarm < ActiveRecord::Migration
  def change
  	    add_column :alarms, :ampm, :string
  end
end
