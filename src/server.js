import net from 'net';
const PORT = 3000;

const clients = [];

const server = net.createServer((socket) => {
    console.log(
        `New client connected: ${socket.remoteAddress}:${socket.remotePort}`
    );
    clients.push(socket);

    socket.on('data', (data) => {
        const message = data.toString().trim();
        const [type, ...payloadParts] = message.split('|');
        const payload = payloadParts.join('|');

        if (type === 'TEXT') {
            console.log(`Received message: ${payload}`);
            clients.forEach((client) => {
                if (client !== socket) {
                    client.write(`TEXT|${payload}`);
                }
            });
        }
    });

    socket.on('close', () => {
        console.log(
            `Client disconnected: ${socket.remoteAddress}:${socket.remotePort}`
        );
        const index = clients.indexOf(socket);
        if (index !== -1) clients.splice(index, 1);
    });

    socket.on('error', (err) => {
        console.error(`Socket error: ${err}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
