import express from "express";
import cors from "cors";
import "dotenv/config";
import logger from "./utils/logger";
import { connect } from "./utils/database.connection";

const app = express();
const PORT = "8050";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2> Library Management System</h2>");
  next();
});

app.listen(PORT, () => {
  logger.info(`server is up & running on PORT ${PORT}`);
  connect();
});
