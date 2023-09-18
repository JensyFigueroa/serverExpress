const getHome = (req, res) => {
  //   res.send('server started')
  res.render("index", { title: "Home" }); //Titlutlo dinamico
};

const getService = (req, res) => {
  //   res.send('Page service')
  res.render("service", { title: "Service" }); //Titlutlo dinamico
};

const getPets = (req, res) => {
  //   res.send('Page service')
  res.render("pets", { arrayPets: [
    {id:1, name: 'Rex', description:'Description Rex'},
    {id:2, name: 'Floffy', description:'Description Floffy'}
  ] }); //Titlutlo dinamico
};

module.exports = {
    getHome,
    getService,
    getPets
}