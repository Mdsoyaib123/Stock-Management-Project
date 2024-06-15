import { NextResponse } from "next/server";

const { MongoClient, ServerApiVersion } = require("mongodb");

export async function GET(request) {
  const uri = `mongodb+srv://Stock-management:hA3PWeKSMHLhb7rU@cluster0.2amfc4s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("Stock-management");
    const movies = database.collection("Data");
    const query = {};
    const movie = await movies.findOne(query);
    console.log(movie);
    return NextResponse.json({ a: 44, movie });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
