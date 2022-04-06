import { MongoClient } from 'mongodb';

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://admin:admin@react-class.fbldd.mongodb.net/events?retryWrites=true&w=majority'
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, filter = {}) {
  const documents = await db
    .collection('comments')
    .find(filter)
    .sort({ _id: -1 })
    .toArray();

  return documents;
}
