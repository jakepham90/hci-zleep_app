class CreateAlarms < ActiveRecord::Migration
  def change
    create_table :alarms do |t|
      t.string :title
      t.string :type
      t.time :time
      t.references :user, index: true

      t.timestamps
    end
  end
end
