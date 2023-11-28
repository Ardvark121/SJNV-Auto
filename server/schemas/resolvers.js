const { User, Car } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("cars");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("cars");
    },
    cars: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Car.find(params);
    },
    car: async (parent, { _id }) => {
      return Car.findOne({ _id });
    },
<<<<<<< HEAD
    searchCars: async (_, args) => {
      const queryParams = new URLSearchParams(args).toString();
=======

    searchCars: async (_, args) => {
      // Filter out empty or undefined parameters
      const validParams = Object.entries(args).reduce((acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      }, {});

      const queryParams = new URLSearchParams(validParams).toString();
      console.log(`queryParams: ${queryParams}`);
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
      const url = `https://api.api-ninjas.com/v1/cars?${queryParams}`;

      try {
        const response = await fetch(url, {
<<<<<<< HEAD
          headers: { 'X-Api-Key': process.env.CARS_API_KEY }
        });
        const data = await response.json();
        return data.map(car => ({
=======
          headers: { "X-Api-Key": process.env.CARS_API_KEY },
        });
        const data = await response.json();
        // console.log(data);
        return data.map((car) => ({
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
          make: car.make,
          model: car.model,
          fuel_type: car.fuel_type,
          drive: car.drive,
<<<<<<< HEAD
          cylinders: car.cylinders,
          transmission: car.transmission,
          year: car.year,
          min_city_mpg: car.min_city_mpg,
          max_city_mpg: car.max_city_mpg,
          min_hwy_mpg: car.min_hwy_mpg,
          max_hwy_mpg: car.max_hwy_mpg,
          min_comb_mpg: car.min_comb_mpg,
          max_comb_mpg: car.max_comb_mpg
        }));
      } catch (error) {
        console.error(error);
        throw new Error('Error fetching data from external API');
      }},
  },

  Mutation: {
    createUser: async (parent, args) => {
      const createdUser = await User.create({ username, email, password });
      const token = signToken(user);
      return { createdUser, token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
=======
          transmission: car.transmission,
          year: car.year,
          min_comb_mpg: car.min_comb_mpg,
          max_comb_mpg: car.max_comb_mpg,
        }));
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching data from external API");
      }
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const createdUser = await User.create({ username, email, password });
      const token = signToken(createdUser);
      return { createdUser, token };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
<<<<<<< HEAD
    createCar: async (parent, { title, vin, year, make, model }, context) => {
      if (context.user) {
        const createdCar = await Car.create({
          username: context.user.username,
          title,
          vin,
          year,
          make,
          model,
=======
    createCar: async (
      parent,
      {
        title,
        vin,
        year,
        make,
        model,
        fuel_type,
        drive,
        transmission,
        min_comb_mpg,
        max_comb_mpg,
      }
    ) => {
      const createdCar = await Car.create({
        title,
        vin,
        year,
        make,
        model,
        fuel_type,
        drive,
        transmission,
        min_comb_mpg,
        max_comb_mpg,
      });

      await User.findOneAndUpdate(
        { _id: "655ec144cfb2a6a7a48a423f" },
        { $addToSet: { cars: createdCar._id } }
      );

      return createdCar;
    },
    removeCar: async (parent, { Car_Id }, context) => {
      if (context.user) {
        const car = await Car.findOneAndDelete({
          _id: Car_Id,
          username: context.user.username,
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
<<<<<<< HEAD
          { $addToSet: { thoughts: thought._id } }
        );

        return thought;
=======
          { $pull: { Cars: car._id } }
        );

        return Car;
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
      }
      throw AuthenticationError;
    },
  },
<<<<<<< HEAD
  removeCar: async (parent, { Car_Id }, context) => {
    if (context.user) {
      const car = await Car.findOneAndDelete({
        _id: Car_Id,
        username: context.user.username,
      });

      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { Cars: car._id } }
      );

      return Car;
    }
    throw AuthenticationError;
  },
=======
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
};

module.exports = resolvers;
