import { useBase } from 'h3';
import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World")
});

export default useBase('/api/api', app);