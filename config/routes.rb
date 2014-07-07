Rails.application.routes.draw do
  get 'popcorn/index'
  root 'popcorn#index'


  match '*url' => 'popcorn#index', :via => [:get, :post]
end
