Rails.application.routes.draw do
  
  resources :students, only: [:index, :show]
  resources :instructors, only: [:index, :show]

  get "playlist/likes", to: "playlist#get_likes"

  patch "playlist/likes", to: "playlist#increment_likes"
  patch "playlist/dislikes", to: "playlist#increment_dislikes"
  
  patch "playlist/minus_likes", to: "playlist#decrement_likes"
  patch "playlist/minus_dislikes", to: "playlist#decrement_dislikes"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
