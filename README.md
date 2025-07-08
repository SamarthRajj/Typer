# Typer - Remote Text Typing Tool

A simple tool that lets you type text on your computer from your mobile phone using a web interface.

## How It Works

1. Run a server on your computer
2. Open a web page on your phone (same WiFi network)
3. Type or paste text and send it
4. The text automatically appears on your computer after 2 seconds

## Prerequisites

- Node.js (v14 or higher)
- Python 3.6 or higher
- Required Python packages: `pyautogui`

## Installation

1. Clone or download this repository
2. Open terminal/command prompt in the project folder
3. Install dependencies:
   ```bash
   npm install
   pip install -r requirements.txt
   ```

## Usage

### Step 1: Start the Server
Run this command on your computer:
```bash
node typer.js
```

You'll see: `Server is running on http://0.0.0.0:3005`

### Step 2: Find Your Computer's IP Address
- **Windows:** Open Command Prompt and type `ipconfig`
- **Mac/Linux:** Open Terminal and type `ifconfig` or `ip addr`
- Look for your WiFi IP address (usually starts with `192.168.` or `10.0.`)

### Step 3: Access from Your Phone
1. Make sure your phone is connected to the same WiFi as your computer
2. Open your phone's web browser
3. Go to: `http://YOUR_COMPUTER_IP:3005`
   - Example: `http://192.168.1.100:3005`

### Step 4: Send Text
1. Type or paste text in the text area
2. Tap "Send Text"
3. The text will appear on your computer after 2 seconds

### Step 5: Cancel Typing (Optional)
If you want to stop typing, tap "Cancel Typing"

## Troubleshooting

- **Can't connect from phone:** Make sure both devices are on the same WiFi network
- **Text not appearing:** Click where you want the text to appear on your computer before sending
- **Server won't start:** Check if port 3005 is already in use by another application

## Customization & Tweaks

You can adjust how the typing works by editing `typer.py`:

- **Typing Speed:**
  - Open `typer.py` in a text editor.
  - Find the line: `time.sleep(0.01)`
  - Lower the value (e.g., `0.005`) to type faster, or increase it (e.g., `0.05`) to type slower.

- **Initial Delay Before Typing:**
  - In `typer.py`, find the line: `time.sleep(2)`
  - Change the number to set how many seconds to wait before typing starts after you send text.

After making changes, save the file and restart the server if it's running.

## Files

- `typer.js` - Main server file
- `web-interface.html` - Web interface for mobile/desktop
- `typer.py` - Python script that handles the actual typing
- `requirements.txt` - Python dependencies
- `package.json` - Node.js dependencies

