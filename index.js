const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const FileUpload = require("express-fileupload");
const cors = require("cors");
const ArsipRoute = require("./routers/ArsipRoute.js");
const DataRoute = require("./routers/DataRoute.js");
const UserRoute = require("./routers/UserRoute.js");

dotenv.config();
const app = express();
app.use(cors({ credentials: true, origin: 'http://127.0.0.1:5173'}));
app.use(cookieParser())
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));

app.use(DataRoute);
app.use(ArsipRoute);
app.use(UserRoute);

app.listen(5000, ()=> console.log("Server Sedang berjalan di http://localhost:5000"));