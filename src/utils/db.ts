import {MongoClient} from 'mongodb';
import {MONGO_DB, MONGO_URI} from "@/pages/api/categories/create";

export async function connectToDatabase() {
  const client = await MongoClient.connect(MONGO_URI);
  return client.db(MONGO_DB)
}