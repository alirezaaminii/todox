import {MongoClient} from 'mongodb';
import {getMongoDB, getMongoURI} from "@/utils/env";

export async function connectToDatabase() {
  const client = await MongoClient.connect(getMongoURI());
  return client.db(getMongoDB())
}