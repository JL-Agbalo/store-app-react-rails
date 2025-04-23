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
              expires_in: JwtService::EXPIRATION_TIME,
              user: {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name
              }
            }, status: :ok
          else
            render json: { 
              status: 'error',
              error: 'Invalid credentials' 
            }, status: :unauthorized
          end
        end

        def signout
          render json: {
            status: 'success',
            message: 'Successfully signed out'
          }, status: :ok
        end
        
      end
    end
  end