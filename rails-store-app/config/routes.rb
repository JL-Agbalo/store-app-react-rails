Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post '/signup', to: 'users#create'
      post '/signin', to: 'authentication#signin'
      delete '/signout', to: 'authentication#signout'
      
      # Current user route
      get '/me', to: 'users#me'
    end
  end
end