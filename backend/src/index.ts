import https from "https";

const server = https.createServer((req, res) => {
    res.write("hello world");
    res.end();
});
const port = 8080;
server.listen(port, () => console.log(`server listening on port ${port}`));
