# LanTalker

LanTalker is a simple CLI-based text-sharing application built with Node.js that enables real-time messaging across devices on the same local network. It uses the Node.js built-in `net` module for TCP socket communication and [Inquirer](https://www.npmjs.com/package/inquirer) for an enhanced command-line experience.

## Features

- **Real-Time Messaging:** Send and receive text messages instantly between connected clients.
- **Local Network Communication:** Designed to work within a local network environment.
- **Interactive CLI:** Uses Inquirer for a user-friendly command-line interface.
- **Simple Protocol:** Uses a custom protocol (`TEXT|<message>`) to differentiate message types.

## Prerequisites

- **Node.js:** Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/lanTalker.git
   cd lanTalker
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   This will install Inquirer (and any other dependencies).

## Usage

### Running the Server

1. Open a terminal and navigate to the project directory.
2. Start the server by running:

   ```bash
   node server.js
   ```

   The server will start listening on port `3000` by default.

### Running the Client

1. Open another terminal (or multiple terminals for multiple clients) and navigate to the project directory.
2. Run the client by executing:

   ```bash
   node client.js
   ```

3. **Using the CLI:**
   - When prompted, enter your message.
   - To exit, type `exit`.

**Note:** If the server is running on a different machine, update the `HOST` variable in `client.js` with the server's IP address.

## How It Works

- **Server:**
  - Listens for incoming TCP connections on the specified port.
  - Handles incoming messages by parsing them based on the custom protocol (`TEXT|<message>`).
  - Broadcasts received messages to all other connected clients.

- **Client:**
  - Connects to the server and waits for user input using Inquirer.
  - Sends user-entered messages to the server.
  - Receives messages from the server and displays them in the console.

## Troubleshooting

- **MaxListenersExceededWarning:**
  - If you encounter a warning about exceeding the maximum number of event listeners, ensure you are using the provided async loop for user prompts and not creating duplicate listeners.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas for improvement or find a bug.

---

Happy chatting on your local network with LanTalker! If you have any questions or need further assistance, feel free to reach out.
