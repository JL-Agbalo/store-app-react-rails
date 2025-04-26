class JwtService
  # Use a development secret key when credentials aren't available
  HMAC_SECRET = if Rails.env.production?
                  Rails.application.credentials.secret_key_base
                else
                  'development_secret_key_do_not_use_in_production'
                end
  
  ALGORITHM = 'HS256'.freeze
  ACCESS_TOKEN_EXPIRY = 30.minutes.to_i
  REFRESH_TOKEN_EXPIRY = 14.days.to_i

  def self.encode_access_token(payload)
    payload = payload.merge(exp: Time.now.to_i + ACCESS_TOKEN_EXPIRY)
    JWT.encode(payload, HMAC_SECRET, ALGORITHM)
  end

  def self.encode_refresh_token(payload)
    payload = payload.merge(exp: Time.now.to_i + REFRESH_TOKEN_EXPIRY, refresh: true)
    JWT.encode(payload, HMAC_SECRET, ALGORITHM)
  end

  def self.decode(token)
    begin
      decoded_token = JWT.decode(token, HMAC_SECRET, true, { algorithm: ALGORITHM })[0]
      HashWithIndifferentAccess.new(decoded_token)
    rescue JWT::DecodeError, JWT::ExpiredSignature, JWT::VerificationError => e
      puts "Token error: #{e.message}" if Rails.env.development?
      nil
    end
  end
end