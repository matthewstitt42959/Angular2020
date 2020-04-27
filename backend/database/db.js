const config = require('../../config.json');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mstitt:1sabrina@cluster0-kzh09.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  MongoClient.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
  MongoClient.Promise = global.Promise;
  // perform actions on the collection object
  client.close();
});

// module.exports = {
//     User: require('../src/app/_model/user.model')
// };

