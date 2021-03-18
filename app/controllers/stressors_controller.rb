class StressorsController < ApplicationController
  before_action :set_stressor, only: [:show, :update, :destroy]

  # GET /stressors
  def index
    goals = Goal.all
    render json: goals
end

  # GET /stressors/1
  def show
    render json: @stressor
  end

  # POST /stressors
  def create
    @stressor = Stressor.new(stressor_params)

    if @stressor.save
      render json: @stressor, status: :created, location: @stressor
    else
      render json: @stressor.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stressors/1
  def update
    if @stressor.update(stressor_params)
      render json: @stressor
    else
      render json: @stressor.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stressors/1
  def destroy
    @stressor.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stressor
      @stressor = Stressor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def stressor_params
      params.require(:stressor).permit(:name, :conquered, :user_id)
    end
end
