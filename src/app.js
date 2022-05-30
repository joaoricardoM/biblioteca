import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'erro de conexão'));
db.once("open", () => {
    console.log("conexão com o banco feita!")
})

const app = express();
routes(app);

export default app;