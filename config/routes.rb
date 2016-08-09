Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    get '/' => 'members#index'

    namespace :api do
      namespace :v1 do
        get '/members' => 'members#index'
        post '/members' => 'members#create'
        get '/members/:id' => 'members#show'
      end
    end

    get '/members/:id' => 'members#show'
end
