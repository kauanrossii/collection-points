import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    app.listen(3000, "server")
}).catch(error => console.error(error));