const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

// middlewares
app.use(cors());
app.use(express.json());

// mongodb
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.spr5boq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("bistro running");
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    //   await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const usersCollection = client.db("bistroDB").collection("users");    
    const menuCollection = client.db("bistroDB").collection("menu");    
    const reviewsCollection = client.db("bistroDB").collection("reviews");    
    const cartCollection = client.db("bistroDB").collection("cart");    


    // users

    app.get('/users', async(req,res) => {
      const result = await usersCollection.find().toArray()
      res.send(result)
    })

    app.post('/users', async(req, res) => {
      const user = req.body;
      const query = {email: user.email}
      const existingUser = await usersCollection.findOne(query)
      if(existingUser) {
        return res.send({message: 'user already exists'})
      }
      const result = await usersCollection.insertOne(user);
      res.send(result)
    })

    // menu
    app.get('/menu', async(req,res) => {
        const result = await menuCollection.find().toArray();
        res.send(result);
    })


    // review
    app.get('/reviews', async(req,res) => {
        const result = await reviewsCollection.find().toArray();
        res.send(result);
    })


    // cart

    app.get('/carts', async(req,res) => {
      const email = req.query.email;
      if(!email) {
        res.send([]);
      }
      const query = {email:email}
      const result = await cartCollection.find(query).toArray()
      res.send(result)
    })

    app.post('/carts', async(req, res) => {
      const item = req.body;
      console.log(item)
      const result = await cartCollection.insertOne(item)
      res.send(result)
    })

    app.delete('/carts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id)}
      const result = await cartCollection.deleteOne(query)
      res.send(result);
    })


  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log("server running at port " + port);
});


/**
 * Naming Convention
 * users: userCollection
 * app.get('/user')
 * app.get('/users/:id')
 * app.post('/users')
 * app.patch('/users/:id')
 * app.put('/users/:id')
 * app.delete('/users/:id')
 */