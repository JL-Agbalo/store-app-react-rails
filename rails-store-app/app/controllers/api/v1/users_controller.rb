module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!, only: [:me]
      
      def create
        user = User.new(user_params)
        
        if user.save
          # Automatically sign in after signup
          set_access_token(user)
          set_refresh_token(user)
          
          render json: { 
            user: user.as_json(except: [:password_digest, :created_at, :updated_at]),
            message: 'User created successfully' 
          }, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      end
      
      def me
        if current_user
          render json: { user: current_user.as_json(except: [:password_digest, :created_at, :updated_at]) }, status: :ok
        else
          render json: { error: 'User not found' }, status: :not_found
        end
      end
      
      private
      
      def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
      end
    end
  end
end