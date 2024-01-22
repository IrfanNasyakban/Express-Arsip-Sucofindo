import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ArsipRoute from "./routers/ArsipRoute.js";
import DataRoute from "./routers/DataRoute.js";

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));

app.use(DataRoute);
app.use(ArsipRoute);

app.listen(5000, ()=> console.log("Server Sedang berjalan di http://localhost:5000"));