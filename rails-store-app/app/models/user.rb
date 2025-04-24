class User < ApplicationRecord
    has_secure_password
  
    # Validations
    validates :first_name, presence: true, length: { maximum: 128 }
    validates :last_name, presence: true, length: { maximum: 128 }
    validates :email, presence: true, 
                     uniqueness: { case_sensitive: false },
                     format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 6 }, if: -> { new_record? || !password.nil? }
    validates :password_confirmation, presence: true

    # Callbacks
    before_save :downcase_email
  
    private

  
    def downcase_email
      self.email = email.downcase
    end
  end