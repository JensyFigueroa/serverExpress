const mongoose = require("mongoose");

require('dotenv').config();
const {USER, PASSWORD, DBNAME} = process.env


// const user = "jensy1418";
// const password = "pfFwyAPDw19aT5ND";
// const dbname = 'vet'
const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0.4rgxytc.mongodb.net/${DBNAME}?retryWrites=true&w=majority";`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected database...')
)
.catch(e =>  console.log(e))
