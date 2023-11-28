const typeDefs = `
  type User {
  _id: ID
  username: String
  email: String
  password: String
<<<<<<< HEAD
  cars: [Car]!
=======
  cars: [Car]
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
  }

  type Car {
    _id: ID
    username: String
    vin: String
    title: String
    year: Int
    make: String
    model: String
<<<<<<< HEAD
  }

  type ExternalCar {
    make: String
    model: String
    fuel_type: String
    drive: String
    cylinders: Int
    transmission: String
    year: Int
    min_city_mpg: Int
    max_city_mpg: Int
    min_hwy_mpg: Int
    max_hwy_mpg: Int
    min_comb_mpg: Int
    max_comb_mpg: Int
=======
    fuel_type: String
    drive: String
    transmission: String
    min_comb_mpg: Int
    max_comb_mpg: Int

>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
  }

  type Query {
    users: [User]!
    user(username: String): User
    cars(username: String): [Car]!
    car(carId: ID!): Car
<<<<<<< HEAD
    searchCars(make: String, model: String, fuel_type: String, drive: String, cylinders: Int, transmission: String, year: Int, min_city_mpg: Int, max_city_mpg: Int, min_hwy_mpg: Int, max_hwy_mpg: Int, min_comb_mpg: Int, max_comb_mpg: Int, limit: Int): [ExternalCar]
=======
    searchCars(make: String, model: String, fuel_type: String, drive: String, transmission: String, year: Int, min_comb_mpg: Int, max_comb_mpg: Int, limit: Int): [Car]

>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
  }

 
  type Mutation {
    createUser(username: String!, email: String!, password: String!): User
<<<<<<< HEAD
    login(email: String!, password: String!): User
=======
    login(username: String!, password: String!): User
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
    createCar( vin: String, title: String, year: Int!, make: String!, model: String!): Car
    removeCar(Car_Id: ID!): Car
  }
`;

module.exports = typeDefs;
