import express from "express";
import "dotenv/config";
import connectDB from "./connect.js";
import bodyParser from "body-parser";
import router from "./routes/index.js";




const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const uri = process.env.MONGO_URI || null;
connectDB(uri);


router(app);

app.listen(port, () => {
  console.log("Khởi động server thành công!");
});
