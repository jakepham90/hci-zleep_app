desc "This task is called by the Heroku scheduler add-on"




task :sleep_reminder => :environment do
  
end

task :wakeup_call => :environment do
	@alarms = Alarms.all
	@alarms.each do |alarm|
		if (Time.now.strftime('%H') == alarm.hour_time)
			puts "HOUR MATCH"
			if (Time.now.strftime('%H') == alarm.minute_time)
				puts "MINUTE MATCH"
			end
		else
			puts "NOTHING MATCH"
		end
	end


end