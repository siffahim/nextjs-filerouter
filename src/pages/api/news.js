const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://university:lSBhJ2vqhVBikVaM@cluster0.lyhqa.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const database = client.db("news-portal");
    const newsCollection = database.collection("news");

    if (req.method === "GET") {
      const news = await newsCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: news });
    }
  } finally {
    //await client.close();
  }
}

export default run;
