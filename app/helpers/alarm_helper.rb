module AlarmHelper
  @@reminders = {}
  def self.set_reminders(x)
    @@reminders = x
  end

  def self.get_reminders
    @@reminders
  end
end
