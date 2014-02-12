class AlarmController < ApplicationController
before_filter :authenticate_user!

  def index
  end

  def myAlarms
  end

  def sleepyJams
  end

  def sleep101
  end

  def new 
  end

  def sleep
    render :layout => 'goodnight'
  end
end
