class UsersController < ApplicationController
before_filter :authenticate_user!
skip_before_filter  :verify_authenticity_token

	def stats
	  
	end



end