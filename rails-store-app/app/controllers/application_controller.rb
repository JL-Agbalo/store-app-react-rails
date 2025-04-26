class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  private
  
  def current_user
    @current_user ||= begin
      token = cookies.signed[:jwt]
      puts "Debug: Token found: #{token ? 'Yes' : 'No'}"
      
      if token
        begin
          payload = JwtService.decode(token)
          puts "Debug: Payload decoded: #{payload.inspect}"
          
          if payload
            user = User.find_by(id: payload[:user_id])
            puts "Debug: User found: #{user ? 'Yes (ID: ' + user.id.to_s + ')' : 'No'}"
            user
          else
            puts "Debug: JWT decode returned nil"
            nil
          end
        rescue => e
          puts "Debug: JWT decode error: #{e.message}"
          nil
        end
      end
    end
  end
  
  def authenticate_user!
    puts "Debug: Cookie present: #{cookies.signed[:jwt].present?}"
    puts "Debug: Cookie value: #{cookies.signed[:jwt]}"
    unless current_user
      render json: { error: 'Not authenticated' }, status: :unauthorized
    end
  end
  
  def set_access_token(user)
    access_token = JwtService.encode_access_token(user_id: user.id)
    cookies.signed[:jwt] = {
      value: access_token,
      httponly: true,
      same_site: :lax,
      expires: Time.now + JwtService::ACCESS_TOKEN_EXPIRY,
      secure: Rails.env.production?
    }
  end
  
  def set_refresh_token(user)
    refresh_token = JwtService.encode_refresh_token(user_id: user.id)
    cookies.signed[:refresh_token] = {
      value: refresh_token,
      httponly: true,
      same_site: :lax,
      expires: Time.now + JwtService::REFRESH_TOKEN_EXPIRY,
      secure: Rails.env.production?
    }
  end
  
  def remove_jwt_cookies
    cookies.delete(:jwt)
    cookies.delete(:refresh_token)
  end
end