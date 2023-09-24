const Pet = require("../models/pet.js");

const postCreate = async (req, res) => {
  const body = req.body;
  // console.log(body)
  // res.redirect('/pets');

  try {
      res.redirect('/pets');
      // const petDB = new Pet(body); // 1era Metodo
      // await petDB.save(); // 1era Metodo
    await Pet.create(body) //2do Metodo
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = {
  postCreate,
};
