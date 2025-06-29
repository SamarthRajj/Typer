# Typer - Remote Text Typing Tool

A Node.js server that receives text via HTTP requests and automatically types it on your computer using Python's pyautogui library.

## Features

- HTTP API endpoint to receive text remotely
- Automatic typing simulation with configurable delays
- IP filtering for security (optional)
- Cross-platform compatibility

## Prerequisites

- Node.js (v14 or higher)
- Python 3.6 or higher
- Required Python packages: `pyautogui`

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/typer.git
cd typer
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Install Python dependencies:
```bash
pip install pyautogui
```

## Usage

1. Start the server:
```bash
node typer.js
```

The server will start on `http://0.0.0.0:3005`

2. Send the request via Postman
    Send a POST request to the link "http://your_ip_address:3005/receive" in JSON format. The text should be in body with feild name "text"
    To find your ip address use "ipconfig" command in your cmd and paste the Wireless LAN adapter Wi-Fi:  IPv4 Address as your ip address.
```bash
{
    "text": "Hello, this is a test message!"
}

```

## Configuration

### IP Filtering (Security)

By default, IP filtering is disabled. To enable it:

1. Uncomment the IP filtering code in `typer.js` (lines 23-25)
2. Update the `ALLOWED_IP` constant with your desired IP address

### Customization

- **Typing Speed**: Modify the `time.sleep(0.01)` value in `typer.py` to adjust typing speed
- **Initial Delay**: Change the `time.sleep(2)` value in `typer.py` to adjust the delay before typing starts
- **Server Port**: Modify the `PORT` constant in `typer.js` to change the server port

## Security Considerations

⚠️ **Warning**: This tool allows remote text input to your computer. Use with caution:

- Enable IP filtering for production use
- Only run on trusted networks
- Consider using HTTPS for remote access
- Be aware that this can be used maliciously if not properly secured

## API Reference

### POST /receive

Sends text to be typed on the computer.

**Request Body:**
```json
{
  "text": "Text to be typed"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Text sent to typer.py for typing"
}
```

**Error Responses:**
- `400 Bad Request`: Missing text in request body
- `403 Forbidden`: IP not allowed (if IP filtering is enabled)

## License

This project is licensed under the ISC License.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Disclaimer

This tool is provided as-is for educational and personal use. The authors are not responsible for any misuse or damage caused by this software. Use at your own risk. 