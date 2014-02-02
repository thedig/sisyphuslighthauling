ClairePortfolio::Application.routes.draw do

  root to: "static#home"

  resources :projects do
  	resources :photos, only: [:index, :new, :create, :destroy, :update]
  end

end
