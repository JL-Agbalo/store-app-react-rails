class JwtService
    HMAC_SECRET = Rails.application.credentials.secret_key_base
    ALGORITHM = 'HS256'.freeze
    EXPIRATION_TIME = 24.hours.to_i  # Set expiration to 24 hours
  
    def self.encode(payload)
      payload = payload.dup
      payload['exp'] = Time.now.to_i + EXPIRATION_TIME
      JWT.encode(payload, HMAC_SECRET, ALGORITHM)
    end
  
    def self.decode(token)
      JWT.decode(token, HMAC_SECRET, true, {
        algorithm: ALGORITHM,
        exp_leeway: 30 # Give 30 seconds leeway for expiration checks
      })[0]
    rescue JWT::ExpiredSignature
      raise 'Token has expired'
    rescue JWT::DecodeError
      nil
    end
  end