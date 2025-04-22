module Errors
    class AuthenticationError < StandardError
      def initialize(message = 'Invalid credentials')
        super
      end
    end
  
    class AuthorizationError < StandardError
      def initialize(message = 'Unauthorized access')
        super
      end
    end
  
    class TokenError < StandardError
      def initialize(message = 'Invalid token')
        super
      end
    end
  end