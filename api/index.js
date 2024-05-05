import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import  userRoutes from './routes/user.route.js'

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
app.use('/api/user',userRoutes)