class API::V1::StressorsController < ApplicationController
 

  # GET /stressors
  def index
    stressors = Stressor.all
    render json: stressors
end

  # GET /stressors/1
  def show
    render json: @stressor
  end

  # POST /stressors
  def create
    stressor = Stressor.create(stressor_params)
    render json: stressor
end


  # PATCH/PUT /stressors/1
  def update
    #binding.pry
    stressor = Stressor.find(params[:id]).update(stressor_params)
    render json: stressor
end


  # DELETE /stressors/1
  def destroy
    #binding.pry
    stressor = Stressor.find(params[:id]).destroy
    render json: stressor
end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stressor
      @stressor = Stressor.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def stressor_params
      params.require(:stressor).permit(:name, :overcamed, :user_id)
    end
end
