const mongoose = require("mongoose");

const user = "jensy1418";
const password = "pfFwyAPDw19aT5ND";
const dbname = 'vet'
const uri = `mongodb+srv://${user}:${password}@cluster0.4rgxytc.mongodb.net/${dbname}?retryWrites=true&w=majority";`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected database...')
)
.catch(e =>  console.log(e))
