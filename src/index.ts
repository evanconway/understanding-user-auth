import http from "http";

const serverListener = (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === "/") {
        res.write("hello world");
    }
    res.end();
};

const server = http.createServer(serverListener);
const port = 8080;
server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});

