Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Add refresh token route
      post '/refresh', to: 'authentication#refresh'
      
      # Existing routes
      get '/me', to: 'users#me'
      post '/signup', to: 'users#create'
      post '/signin', to: 'authentication#signin'
      delete '/signout', to: 'authentication#signout'
    end
  end
end