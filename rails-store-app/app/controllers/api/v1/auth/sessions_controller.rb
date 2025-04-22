module Api
  module V1
    module Auth
      class SessionsController < ApplicationController
        skip_before_action :authenticate_user, only: [:create]

        def create
          user = User.find_by(email: params[:email].downcase)
          
          if user&.authenticate(params[:password])
            token = JsonWebToken.encode(user_id: user.id)
            
            cookies.signed[:jwt] = {
              value: token,
              httponly: true,
              secure: Rails.env.production?,
              same_site: :strict,
              expires: 24.hours.from_now
            }
            
            render json: {
              token: token,
              user: user.as_json(except: [:password_digest]),
              status: :ok
            }
          else
            render json: { error: 'Invalid credentials' }, status: :unauthorized
          end
        end

        def me
          if @current_user
            render json: {
              user: @current_user.as_json(except: [:password_digest]),
              status: :ok
            }
          else
            render json: { error: 'Not authenticated' }, status: :unauthorized
          end
        end
      end
    end
  end
end