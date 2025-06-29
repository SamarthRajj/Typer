const express = require("express");
const { spawn } = require("child_process");

const app = express();
const PORT = 3005;

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Define the allowed IP address
const ALLOWED_IP = "192.168.187.79"; // Replace with the specific IP address of the second PC

// Route to handle POST requests at /receive
app.post("/receive", (req, res) => {
    // Get the client IP using req.socket.remoteAddress or req.ip (if behind a proxy)
    const clientIp = req.ip || req.socket.remoteAddress;

    console.log(`Request received from IP: ${clientIp}`);

    // If behind a reverse proxy (like Nginx), the real IP might be in req.headers['x-forwarded-for']
    // const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // // Filter requests from non-allowed IPs
    // if (!clientIp.includes(ALLOWED_IP)) {
    //     return res.status(403).send({ error: "Access denied. Your IP is not allowed." });
    // }

    const textToType = req.body.text;

    if (!textToType) {
        return res.status(400).send({ error: "Text is required in the request body" });
    }

    // Run the Python script with the text as input
    const pythonProcess = spawn("python", ["typer.py", textToType]);

    pythonProcess.stdout.on("data", (data) => {
        console.log(`Python script output: ${data.toString()}`);
    });

    pythonProcess.stderr.on("data", (data) => {
        console.error(`Python script error: ${data.toString()}`);
    });

    pythonProcess.on("close", (code) => {
        console.log(`Python script exited with code ${code}`);
        res.send({ success: true, message: "Text sent to typer.py for typing" });
    });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});