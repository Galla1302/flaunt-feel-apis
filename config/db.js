const {MongoClient} = require('mongodb');

const connectToDB = () => {

  return new Promise((resolve, reject) => {
    const uri = `mongodb+srv://galla130294:Tottenham@123@clustertest.m3zqpng.mongodb.net/test`;
    
    const client = new MongoClient(uri);

  });
};

module.exports = {
  connectToDB
};