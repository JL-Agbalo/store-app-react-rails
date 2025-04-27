FactoryBot.define do
  factory :profile do
    user { nil }
    phone { "MyString" }
    avatar_url { "MyString" }
    date_of_birth { "2025-04-27" }
    address { "MyString" }
    city { "MyString" }
    postal_code { "MyString" }
    country { "MyString" }
    bio { "MyText" }
  end
end
