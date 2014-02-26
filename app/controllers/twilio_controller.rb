class TwilioController < ApplicationController
	def message
	    respond_to do |format|
	      format.xml { @postto }
	    end
	  end
end
