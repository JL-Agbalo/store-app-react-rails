module Api
  module V1
    class AuthenticationController < ApplicationController
      skip_before_action :authenticate_request, only: [:signin]

      def signin
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
          token = JwtService.encode(user_id: user.id)
          
          # Set HTTP-only cookie
          cookies.signed[:jwt] = {
            value: token,
            httponly: true,
            secure: Rails.env.production?,
            same_site: :strict,
            expires: Time.now + JwtService::EXPIRATION_TIME
          }

          render json: { 
            status: 'success',
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
        # Clear the cookie
        cookies.delete(:jwt)
        
        render json: {
          status: 'success',
          message: 'Successfully signed out'
        }, status: :ok
      end
    end
  end
end