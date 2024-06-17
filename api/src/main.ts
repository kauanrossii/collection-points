import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    const http = require("http");
    http.createServer(app).listen(3000, "localhost");
}).catch(error => console.error(error));