import pyautogui
import time
import sys

# Get the text to type from the command-line argument
if len(sys.argv) < 2:
    print("Error: No text provided")
    sys.exit(1)

text_to_type = sys.argv[1]

# Delay before typing starts (optional)
time.sleep(2)

# Simulate typing
for char in text_to_type:
    pyautogui.typewrite(char)
    time.sleep(0.01)  # Delay between keystrokes
