import express from "express";
import "./database";
import User from "./models/user";
import apiRoutes from "./routes/main.routes";
import { formatResponsive } from "./lib/formateResponsive";
import { port } from "./env";
const app = express();

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
