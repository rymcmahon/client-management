# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Member.create([
  {first_name: "Jim", last_name: "Harding", street_address: "344 Longbow Rd", city: 'Evanston',
  state: 'IL', zip: '34523', email: 'jmm@gmail.com', phone: '312-334-2121', membership: '12 month'},
  {first_name: "Sally", last_name: "Cummings", street_address: "211 Jameson St", city: 'Chicago',
  state: 'IL', zip: '34321', email: 'sally@gmail.com', phone: '773-223-1213', membership: '6 month'},
  {first_name: "Wendy", last_name: "Flemming", street_address: "12 Fern St", city: 'Skokie',
  state: 'IL', zip: '65434', email: 'wndy@gmail.com', phone: '847-221-2134', membership: '6 month'},
  {first_name: "Alex", last_name: "Jones", street_address: "333 Beach Ave", city: 'Niles',
  state: 'IL', zip: '44232', email: 'alex@gmail.com', phone: '847-332-323', membership: '12 month'}
  ])