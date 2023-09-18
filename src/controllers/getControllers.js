const getHome = (req, res) => {
  //   res.send('server started')
  res.render("index", { title: "Home" }); //Titlutlo dinamico
};

const getService = (req, res) => {
  //   res.send('Page service')
  res.render("service", { title: "Service" }); //Titlutlo dinamico
};

module.exports = {
    getHome,
    getService
}