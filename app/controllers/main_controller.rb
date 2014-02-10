class MainController < ApplicationController
	before_filter :authenticate_user!

  def index
  end

  def alarm
  end
end
