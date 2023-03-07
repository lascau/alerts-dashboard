class AlertsController < ApplicationController
  before_action :authenticate_user!

  def index
    @alerts = Alert.order(created_at: :desc)
    render json: @alerts.to_json
  end

  def create
    if alert_params[:type_of] != 'portal_opened' && alert_params[:type_of] != 'portal_closed'
      render json: { message: 'Type is not supported!'}, status: :bad_request 
      return
    end

    @alert = Alert.create(alert_params)
    if @alert.save
      render json: @alert.to_json, status: :ok
    else
      render json: {}, status: :unprocessable_entity
    end
  end

  private

  def alert_params
    params.require(:alert).permit(:type_of, :tags, :description, :origin)
  end
end
