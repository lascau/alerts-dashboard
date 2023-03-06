Versions: \
OS: Ubuntu 22.04 \
Node 19.7.0 \
Ruby 3.2 \
Rails 7.0.4.2 \
PostgreSQL 14.7

Database \
Start postgresql and login: sudo systemctl start postgresql \
rails db:migrate (create and update your database tables) \
rails db:seed (run this for testing if insertion in db is working) 

Backend \
cd backend/alerts_assignment \
Start rails server on port 3000: rails s -p 3000

Frontend \
cd frontend/alerts_frontend/ \
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

Video demo(no sound):
