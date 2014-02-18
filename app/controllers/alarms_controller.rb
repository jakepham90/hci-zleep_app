class AlarmsController < ApplicationController
before_filter :authenticate_user!
skip_before_filter  :verify_authenticity_token

  def index
    @alarms = current_user.alarms.all
  end

  def new
    @alarms = current_user.alarms.all
    @alarm = current_user.alarms.new
  end
 
  def create
    @alarm = current_user.alarms.new(post_params)
    @alarm.save
    redirect_to(new_alarm_path)
  end

  def edit 
        @alarms = current_user.alarms.all

      @alarm = Alarm.find(params[:id])
      if @alarm.user_id != current_user.id
        render :file => File.join(Rails.root, 'public', '500.html')
      end
  end

  def update
    @alarm = Alarm.find(params[:id])
    if @alarm.update_attributes(params[:alarm])
      @alarm.save
      redirect_to(:action => 'new')
    else
      render('edit')
    end
  end

  def destroy
    @post = Alarm.find(params[:id])
    @post.destroy
   
    redirect_to(new_alarm_path)
  end

  def show
    @alarm = Alarm.find(params[:id])
  end


  def sleep
    render :layout => 'goodnight'
  end


  private
  def post_params
    params.require(:alarm).permit(:title, :alarm_type, :hour_time, :minute_time, :day, :ampm, :reminder_time)
  end


end
