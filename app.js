import express from "express";
import mongoose from "mongoose";
import User from "./models/user";
import apiRoutes from "./routes/main.routes";
import "dotenv/config";
import { formatResponsive } from "./lib/formateResponsive";
const app = express();
const port = process.env.APP_PORT;

const connectionString = process.env.MONGO_DB_CONNECTION_STRING;
mongoose.connect(connectionString);
mongoose.connection.on("error", (err) => {
  throw new Error("Mongo connection failed");
});
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", apiRoutes);
app.use((err, req, res, next) => {
  if (err) {
    const errObj = { message: err.message, stack: err.stack };
    formatResponsive(res, errObj, 400);
  }
});
app.listen(port, () => {
  console.log(`Our app listening on port ${port}`);
});
