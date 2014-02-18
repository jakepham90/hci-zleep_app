class CreateReminders < ActiveRecord::Migration
  def change
    create_table :reminders do |t|
      t.integer :alarm_id
      t.integer :user_id
      t.string :reminder_hour
      t.string :reminder_minute
      t.boolean :call
      t.boolean :sms

      t.timestamps
    end
  end
end
