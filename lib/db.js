import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://next:next@react-class.fbldd.mongodb.net/authdemo?retryWrites=true&w=majority'
  );
  return client;
}
