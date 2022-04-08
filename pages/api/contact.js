import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.fbldd.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
    console.log('CONNECT STRING: ', connectionString);
    try {
      client = await MongoClient.connect(connectionString);
      console.log(client);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error while creating client' });
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'EFRROR' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message', message: newMessage });
  }
}

export default handler;
