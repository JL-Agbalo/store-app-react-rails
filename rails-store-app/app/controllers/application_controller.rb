class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_request
    attr_reader :current_user
  
    private
  
    def authenticate_request
      token = cookies.signed[:jwt]
  
      begin
        if token
          decoded = JwtService.decode(token)
          @current_user = User.find(decoded['user_id'])
        else
          render json: { status: 'error', error: 'No token provided' }, status: :unauthorized
        end
      rescue => e
        render json: { 
          status: 'error', 
          error: e.message == 'Token has expired' ? 'Token has expired' : 'Invalid token'
        }, status: :unauthorized
      end
    end
end