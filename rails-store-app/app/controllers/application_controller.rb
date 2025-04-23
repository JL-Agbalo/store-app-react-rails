class ApplicationController < ActionController::API
    before_action :authenticate_request
    attr_reader :current_user
  
    private
  
    def authenticate_request
      header = request.headers['Authorization']
      token = header.split(' ').last if header
  
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