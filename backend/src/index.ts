import https from "https";

const server = https.createServer();
const port = 8080;
server.listen(port, () => console.log(`server listening on port ${port}`));
