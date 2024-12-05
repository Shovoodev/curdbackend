import express from "express";
import http from "http";
import compression from "compression";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import morgan from "morgan";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/", router());


app.listen(5500, () => {
  console.log("server running on port ");
});

const MONGO_URL =
  "mongodb+srv://shovoodev:video@cluster0.ls2ss.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => {
  console.log(error);
});
