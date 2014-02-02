ClairePortfolio::Application.routes.draw do

  root to: "static#home"

  resources :projects do
  	resources :photos, only: [:index, :create, :destroy, :update]
  end

end
