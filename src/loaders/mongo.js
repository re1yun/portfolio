// src/loaders/mongo.js
import mongoose from "mongoose";
import Dotenv from "dotenv";
Dotenv.config();

export default async (app) => {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return connection.connection.db;
};
