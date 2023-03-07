Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :alerts, only: [:create, :index]
  root to: "alerts#index"
end
