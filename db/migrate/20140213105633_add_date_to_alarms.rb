class AddDateToAlarms < ActiveRecord::Migration
  def change
    add_column :alarms, :day, :string
  end
end
