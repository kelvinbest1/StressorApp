class API::V1::StressorsController < ApplicationController
 
  # GET /stressors
  def index
    stressors = Stressor.all
    render json: stressors
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
# Only allow a list of trusted parameters through.
def stressor_params
params.require(:stressor).permit(:name, :overcamed, :user_id)
end
end
  




   

