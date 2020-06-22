// with express
import * as express from "express";
import * as path from "path";
const app = express();

const port : string | number = process.env.PORT || 3000;

//add static files like index.html
app.use(express.static("public"));


app.get('/main.js', (_req, res) => {
    res.sendFile(path.resolve(__dirname,"..","client","client.js"));
});

app.listen(port);
