Rails.application.routes.draw do
  devise_for :users, 
    :controllers => {
      registrations: "users/registrations",
      sessions: "users/sessions"
    }
  get 'popcorn/index'
  root 'popcorn#index'
  get 'users', :to => 'users#index'
  get 'users/:id/movies', :to => 'users#movies'



  resources :movies
  resources :favorites

  match '*url' => 'popcorn#index', :via => [:get, :post]
end
