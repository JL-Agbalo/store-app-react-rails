class User < ApplicationRecord
    has_secure_password

    # Validations
    validates :email, presence: true, 
    uniqueness: { case_sensitive: false },
    format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :first_name, length: { maximum: 128 }, allow_nil: true
    validates :last_name, length: { maximum: 128 }, allow_nil: true

    def self.authenticate(email, password)
        user = find_by(email: email.downcase)
        return user if user && user.authenticate(password)
    end
end
