Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Auth routes
      post '/refresh', to: 'authentication#refresh'
      post '/signup', to: 'users#create'
      post '/signin', to: 'authentication#signin'
      delete '/signout', to: 'authentication#signout'
      
      # User routes
      get '/me', to: 'users#me'
      
      # Debug routes
      get '/debug_cookies', to: 'authentication#debug_cookies'
    end
  end
end