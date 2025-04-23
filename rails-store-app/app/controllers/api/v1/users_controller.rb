module Api
    module V1
      class UsersController < ApplicationController
        skip_before_action :authenticate_request, only: [:create]
  
				def create
					user = User.new(user_params)
					if user.save
						token = JwtService.encode(user_id: user.id)
						render json: { 
							status: 'success',
							token: token,
							expires_in: JwtService::EXPIRATION_TIME,
							user: {
								id: user.id,
								email: user.email,
								first_name: user.first_name,
								last_name: user.last_name
							}
						}, status: :created
					else
						render json: { 
							status: 'error', 
							errors: user.errors.full_messages 
						}, status: :unprocessable_entity
					end
				end

        def me
          render json: {
            status: 'success',
            user: {
              id: current_user.id,
              email: current_user.email,
              first_name: current_user.first_name,
              last_name: current_user.last_name
            }
          }
        end
  
        private
  
        def user_params
          params.require(:user).permit(:email, :password, :password_confirmation)
        end
      end
    end
  end