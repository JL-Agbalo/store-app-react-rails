class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    before_action :authenticate_user
    
    private
  
    def authenticate_user
      token = cookies.signed[:jwt]
      if token
        begin
          decoded = JsonWebToken.decode(token)
          @current_user = User.find(decoded[:user_id])
        rescue JWT::ExpiredSignature
          render json: { error: 'Token expired' }, status: :unauthorized
        rescue JWT::DecodeError, ActiveRecord::RecordNotFound
          render json: { error: 'Unauthorized' }, status: :unauthorized
        end
      else
        render json: { error: 'No token present' }, status: :unauthorized
      end
    end
  end