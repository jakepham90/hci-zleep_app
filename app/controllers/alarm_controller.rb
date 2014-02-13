class AlarmController < ApplicationController
before_filter :authenticate_user!
skip_before_filter  :verify_authenticity_token

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
