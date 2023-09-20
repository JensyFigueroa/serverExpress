const Pet = require("../models/pet.js");

const getHome = (req, res) => {
  //   res.send('server started')
  res.render("index", { title: "Home" }); //Titlutlo dinamico
};

const getService = (req, res) => {
  //   res.send('Page service')
  res.render("service", { title: "Service" }); //Titlutlo dinamico
};

const getPets = async (req, res) => {
  //   res.send('Page service')

  try {
    const arrayPetsDB = await Pet.find();
    console.log(arrayPetsDB)

    res.render("pets", {
      arrayPets: arrayPetsDB

      // arrayPets: [
      //   { id: 1, name: "Rex", description: "Description Rex" },
      //   { id: 2, name: "Floffy", description: "Description Floffy" },
      // ],
    }); //Titlutlo dinamico
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getHome,
  getService,
  getPets,
};
