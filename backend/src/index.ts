import https from "https";
import fs from "fs";

const options = {
    key: fs.readFileSync("certificate/server.key"),
    cert: fs.readFileSync("certificate/server.cert"),
};

const server = https.createServer(options, (req, res) => {
    res.write("hello world");
    res.end();
});

const port = 8080;
server.listen(port, () => console.log(`server listening on port ${port}`));
