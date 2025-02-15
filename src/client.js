import net from 'net';
import inquirer from 'inquirer';

const PORT = 3000;
const HOST = '127.0.0.1';

const client = net.createConnection({ host: HOST, port: PORT }, () => {
    console.log(`Connected to server at ${HOST}:${PORT}`);
    promptUser();
});

client.on('data', (data) => {
    const message = data.toString().trim();
    const [type, ...payloadParts] = message.split('|');
    const payload = payloadParts.join('|');

    if (type === 'TEXT') {
        console.log(`\nNew Message: ${payload}`);
    }
});

client.on('end', () => {
    console.log('Disconnected from server');
    process.exit(0);
});

client.on('error', (err) => {
    console.error(`Connection error: ${err}`);
    process.exit(1);
});

async function promptUser() {
    while (true) {
        const { message } = await inquirer.prompt([
            {
                type: 'input',
                name: 'message',
                message: '->',
            },
        ]);

        if (message.trim().toLowerCase() === 'exit') {
            client.end();
            process.exit(0);
        }

        client.write(`TEXT|${message}`);
    }
}
