Rails.application.routes.draw do
  devise_for :users
  get 'popcorn/index'
  root 'popcorn#index'

  resources :movies
  resources :favorites

  match '*url' => 'popcorn#index', :via => [:get, :post]
end
