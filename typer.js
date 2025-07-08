const express = require("express");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const PORT = 3005;

// Middleware to parse JSON data from incoming requests
app.use(express.json());

// Store the current Python process globally
let currentPythonProcess = null;

// Serve the web-interface.html file at the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "web-interface.html"));
});

// Route to handle POST requests at /receive
app.post("/receive", (req, res) => {
    const textToType = req.body.text;

    if (!textToType) {
        return res.status(400).send({ error: "Text is required in the request body" });
    }

    // If a process is already running, reject new requests
    if (currentPythonProcess) {
        return res.status(409).send({ error: "Typing is already in progress. Please cancel or wait." });
    }

    // Run the Python script with the text as input
    currentPythonProcess = spawn("python", ["typer.py", textToType]);

    currentPythonProcess.stdout.on("data", (data) => {
        console.log(`Python script output: ${data.toString()}`);
    });

    currentPythonProcess.stderr.on("data", (data) => {
        console.error(`Python script error: ${data.toString()}`);
    });

    currentPythonProcess.on("close", (code) => {
        console.log(`Python script exited with code ${code}`);
        currentPythonProcess = null;
    });
    res.send({ success: true, message: "Text sent to typer.py for typing" });
});

// Cancel endpoint
app.post("/cancel", (req, res) => {
    if (currentPythonProcess) {
        currentPythonProcess.kill();
        currentPythonProcess = null;
        return res.send({ success: true, message: "Typing cancelled." });
    } else {
        return res.status(400).send({ error: "No typing process is running." });
    }
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});