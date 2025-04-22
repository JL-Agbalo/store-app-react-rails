Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :auth do
        post '/signin', to: 'sessions#create'
        get '/me', to: 'sessions#me'
      end
    end
  end
end