const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oexcdfc.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    

    const toyCollection = client.db('toyMarketPlace').collection('allToy');

    // searching index (cut) after error solving
    

    // getting all toys but limit 20 toys
    app.get('/allToys', async(req, res) => {
        const cursor = toyCollection.find();
        const result = await cursor.limit(20).toArray();
        res.send(result);
    })

    // searching method with toy name
    app.get('/allAddToys/:text', async(req, res) => {
        const query = req.params.text;
        const result = await toyCollection.find({
            $or: [
                { name: { $regex: query, $options: "i"}}
            ]
        }).toArray();
        
        res.send(result);
    })
    
    // getting all toys by every toy id for every toy details
    app.get('/allToys/:id', async(req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id)};
        const result = await toyCollection.findOne(query);
        res.send(result);
    })

    // category wise data.
    app.get('/category/:category', async (req,res) => {
        const query = { category: `${req.params.category}` };
        const cursor = await toyCollection.find(query).toArray();
        res.send(cursor)
    })


    app.post('/allAddToy', async(req, res) => {
        const body = req.body;
        console.log(body)
        const result = await toyCollection.insertOne(body);
        res.send(result)
    })

    app.get('/allAddToy', async(req, res) => {
        console.log(req.query.seller_email);
        let query = {};
        if(req.query.seller_email) {
            query = { seller_email: req.query.seller_email }
        }
        const result = await toyCollection.find(query).toArray();
        res.send(result);
    })

    app.get('/allAddToy/:id', async (req, res) => {
        const id = req.params.id;
        const cursor = { _id: new ObjectId(id) }
        const result = await toyCollection.findOne(cursor);
        res.send(result);
    })

    app.patch('/allAddToy/:id', async(req, res) => {
        const body = req.body;
        console.log(body);
    })

    // for updating user post toy
    app.put('/allAddToy/:id', async(req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const body = req.body;
        const updateToy = {
            $set: {
                price: body.price,
                quantity: body.quantity,
                description: body.description
            }
        }

        const result = await toyCollection.updateOne( query, updateToy, options );
        res.send(result);
    })

    // for delete
    app.delete('/allAddToy/:id', async(req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id)}
        const result = await toyCollection.deleteOne(query);
        res.send(result);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Toy MarketPlace is Running');
})

app.listen(port, () => {
    console.log(`Toy Market Place is running on port: ${port}`);
})
