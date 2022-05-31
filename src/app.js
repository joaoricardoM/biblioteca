import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'error connection'));
db.once("open", () => {
    console.log("conection with bank is active!")
})

const app = express();
routes(app);

export default app;