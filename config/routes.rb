ClairePortfolio::Application.routes.draw do

  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  root to: "static#home"

  get '/about', to: 'static#about'
  get '/contact', to: 'static#contact'

  resources :projects do
  	resources :photos, only: [:index, :new, :create, :destroy, :update]
  end

end
