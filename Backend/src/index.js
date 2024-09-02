import dotenv from "dotenv";
import connectDB from "./db/db.js";
import morgan from "morgan";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

app.use(morgan("tiny"));

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️  server is running at port : ${process.env.PORT}`);
    });
    app.on("error", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });
  })
  .catch((err) => console.log("mongodb connection failed !!", err));
