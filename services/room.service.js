import { client } from '../index.js';

export async function addRoom(data) {
    return await client.db('Task').collection('roomcreate').insertMany(data);
}
export async function getRoom() {
    return await client.db('Task').collection('roomcreate').find().toArray();
}
  