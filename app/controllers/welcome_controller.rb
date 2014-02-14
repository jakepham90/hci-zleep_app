class WelcomeController < ApplicationController
	before_filter :authenticate_user!
	skip_before_filter  :verify_authenticity_token
  def index
    @alarms = current_user.alarms.all
    
  end
end
