module Api
  module V1
    class AuthenticationController < ApplicationController
      
      def signin
        user = User.find_by(email: params[:email])
        
        if user&.authenticate(params[:password])
          # Set tokens
          set_access_token(user)
          set_refresh_token(user)
          
          render json: { 
            user: user.as_json(except: [:password_digest, :created_at, :updated_at]),
            message: 'Signed in successfully'
          }, status: :ok
        else
          render json: { error: 'Invalid email or password' }, status: :unauthorized
        end
      end
      
      def signout
        remove_jwt_cookies
        render json: { message: 'Logged out successfully' }, status: :ok
      end

      def refresh
        refresh_token = cookies.signed[:refresh_token]
        
        if refresh_token
          payload = JwtService.decode(refresh_token)
          
          if payload && payload[:refresh] && payload[:user_id]
            user = User.find_by(id: payload[:user_id])
            
            if user
              # Issue new access token
              set_access_token(user)
              
              # Return success
              render json: { message: 'Token refreshed' }, status: :ok
              return
            end
          end
        end
        
        # If we get here, refresh failed
        render json: { error: 'Invalid refresh token' }, status: :unauthorized
      end
      
      # For testing/debugging purposes
      def debug_cookies
        if Rails.env.production?
          render json: { error: 'Endpoint not available in production' }, status: :forbidden
        else
          render json: {
            access_token_present: cookies.signed[:jwt].present?,
            refresh_token_present: cookies.signed[:refresh_token].present?
          }
        end
      end
    end
  end
end