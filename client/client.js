const net = require('net');
const readline = require('readline');

const options = {
    port: 4000,
    host: '127.0.0.1'
}

const client = net.createConnection(options)

// mensaje al servidor
client.on('connect', () => {
    console.log('Cliente conectado al servidor')
    send()
})

// mensaje de error
client.on('error',(err) => {
    console.log('error: ', err.message)
})

function send() {
    var msg = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    msg.question('Mensaje para el servidor: ', (answer) => {
        client.write(answer)
        msg.close()
        send()
    })
}