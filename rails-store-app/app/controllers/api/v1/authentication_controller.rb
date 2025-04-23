module Api
    module V1
      class AuthenticationController < ApplicationController
        skip_before_action :authenticate_request, only: [:signin]

        def signin
          user = User.find_by(email: params[:email])
          if user&.authenticate(params[:password])
            token = JwtService.encode(user_id: user.id)
            render json: { 
              status: 'success',
              token: token, 
              email: user.email 
            }, status: :ok
          else
            render json: { 
              status: 'error',
              error: 'Invalid credentials' 
            }, status: :unauthorized
          end
        end
      end
    end
  end