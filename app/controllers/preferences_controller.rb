class PreferencesController < ApplicationController
  before_action :set_preference, only: [:show, :update, :destroy]

  # GET /preferences
  def index
    
    preferences = Preference.where(user_id: params[:user_id])
     render json: preferences
  end

  # GET /preferences/1
  def show
    render json: preference
  end

  # POST /preferences
  def create
    preference = Preference.new(preference_params)

    if preference.save
      render json: preference, status: :created, location: preference
    else
      render json: preference.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /preferences/1
  def update
    preference = Preference.find(params[:id])
    if preference.update(preference_params)
      render json: preference
    else
      render json: preference.errors, status: :unprocessable_entity
    end
  end

  # DELETE /preferences/1
  def destroy
    preference = Preference.find(params[:id])
    preference.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_preference
      preference = Preference.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def preference_params
      params.require(:preference).permit(:status, :user_id, :country_id)
    end
end
