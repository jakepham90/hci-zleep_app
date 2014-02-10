class UsersController < ApplicationController

	def profile
	    @user = User.find(params[:id])
		if(current_user)
			@ownProfile = @user.id == current_user.id
		else
			@ownProfile = false
		end
	  
	end



end