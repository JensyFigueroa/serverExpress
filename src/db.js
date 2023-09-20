const mongoose = require("mongoose");

const user = "";
const password = "";
const uri = "";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected database...')
)
.catch(e =>  console.log(e))
