import { MongoClient } from "mongodb";

export async function databaseConnection() {
  const client = await MongoClient.connect(
    "mongodb+srv://Ganesh:w6BNlMJm1JqFqXNz@cluster0.tk8fi.mongodb.net/nextCommerce?retryWrites=true&w=majority"
  );

  return client;
}
