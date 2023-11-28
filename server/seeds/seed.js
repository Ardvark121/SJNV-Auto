<<<<<<< HEAD
const db = require('../config/connection');
const { Tech } = require('../models');
const cleanDB = require('./cleanDB');

const techData = require('./techData.json');

db.once('open', async () => {
  await cleanDB('Tech', 'teches');

  await Tech.insertMany(techData);

  console.log('Technologies seeded!');
=======
const db = require("../config/connection");
const { Car } = require("../models");
const cleanDB = require("./cleanDB");

const carData = require("./carData.json");

db.once("open", async () => {
  await cleanDB("Car", "cars");

  await Car.insertMany(carData);

  console.log("successfully seeded");
>>>>>>> bc48952c30e827588af7fda97b9dcbae7f35b229
  process.exit(0);
});
