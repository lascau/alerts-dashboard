Versions: \
OS: Ubuntu 22.04 \
Node 19.7.0 \
Ruby 3.2 \
Rails 7.0.4.2 \
PostgreSQL 14.7 \
React 18.2

Database \
Start postgresql and login: sudo systemctl start postgresql \
rails db:migrate (create and update your database tables) \
rails db:seed (run this for testing if insertion in db is working) 

Backend \
cd backend/alerts_assignment \
Install all dependencies: bundle install \
Start rails server on port 3000: rails s -p 3000

Frontend \
cd frontend/alerts_frontend/ \
Install all dependencies: npm install \
Start react server on port 3001: npm start \
Select port 3001

Use Postman/Insomnia for POST requests: \
Body example:
```
{
  "type_of": "portal_opened",
  "tags": "{verions1.0, production}",
  "description": "description is nice",
  "origin": "123.89.00.2"
} 
```

Current features:
- alerts are sorted decreasing after create_at date
- you cannot create alerts except of type portal_opened/portal_closed(I hope so)

Improvments:
- pagination/searching/sorting
- loading spinner
- find faster ways to load data(caching mechanism, load just a subset of alerts)
- validations(ex: origin)
- unit tests/specs
- improve ui(material_ui, chackra_ui)

Update 1 \
Done:
- added minimal ui navigation bar and pages for register, sign_in, alerts, home-page
- authentication/authorization mechanism with devise, devise_token_auth gems and stored them in localStorage
- short polling - fetch alerts endpoint for new alerts every 1 sec in loop(idea: turn this off when user not authorized or after a certain period the api is not consumed?)
- cors with rack-cors gem, allowing only GET and POST requests on resources \

To do:
- <s>loading spinner / message before fetching</s>
- <s>when sign in, add a message if it fails and if not redirect to alerts page</s>
- <s>message on alert page when not authorized to access the resource</s>
- pagination

Video demo(no sound):





https://user-images.githubusercontent.com/32646125/223755562-07fb7836-146f-4ffb-97f0-b5cd520fb617.mp4



