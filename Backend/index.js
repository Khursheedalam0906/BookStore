import express from "express";
import dotenv from "dotenv";
import DbConfig from "./db/dbConfig.js";
import cors from "cors";
import bookRouter from "./routes/bookRoute.js";
import userRouter from "./routes/userRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
DbConfig();

app.get("/", (req, res) => {
  res.send("i m working");
});

// Defining routes
app.use(cors());
app.use(express.json());

app.use("/", bookRouter);
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
