// password from .env file
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const password = process.env.DB_PASSWORD;

const url = "mongodb+srv://dbhatia03:" + password + "@cluster0.urazj.mongodb.net/"

const client = new MongoClient(url)

// Database Name
const dbName = 'HelloWorld';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');
  
    // the following code examples can be pasted here...

    // Write
    const data = {
        firstname: "Wasooli",
        lastname: "Bhai",
    }

    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    // Read
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    const findFilter = await collection.find({firstname: "Wasooli"}).toArray();
    console.log(findFilter);
    
  
    return 'done.';
  }


  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  