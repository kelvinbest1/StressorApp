class API::V1::UsersController < ApplicationController


  # GET /users
  def index
    users = User.all
    render json: users
end

# POST /users
def create
  # binding.pry
   user = User.find_by(name: params[[:users]:name])
   if user == nil
       user = User.create(user_params)
       user.save
       render json: user
   else
       redirect_to "/api/v1/users/#{user.id}"
   end
end

# GET /users/1
def show
  user = User.find_by(id: params[:id])
  render json: user
end

private

 #Only allow a list of trusted parameters through.
def user_params
  params.require(:user).permit(:name)
end
end


  

  
  
