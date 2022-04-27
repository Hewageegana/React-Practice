import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = "8070";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h2> Library Management System</h2>");
  next();
});

app.listen(PORT, () => {
  console.log(`server is up & running on PORT ${PORT}`);
});
