Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3001'
    resource '/alerts', headers: :any, methods: [:get, :post]
    resource '/auth', headers: :any, methods: [:get, :post]
    resource '/auth/sign_in', headers: :any, expose: ['access-token', 'token-type', 'client', 'uid', 'expiry'], methods: [:get, :post]
  end
end