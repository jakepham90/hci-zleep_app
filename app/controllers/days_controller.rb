class DaysController < ApplicationController
  def new
    @days = current_user.alarms.days.all
    @day = current_user.alarms.days.new
  end
end
