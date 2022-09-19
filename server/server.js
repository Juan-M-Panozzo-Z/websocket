const net = require('node:net');

const server = net.createServer()

server.on('connection',(socket)=>{
    // mensaje desde el cliente
    socket.on('data', (data) => {
        console.log('\nMensaje recibido desde el cliente: '+ data)
        socket.write('Mensaje recibido')
    })
    // cerrando la conexion
    socket.on('close', () => {
        console.log('Comunicacion finalizada')
    })
    // error en la conexion
    socket.on('error', (err) => {
        console.log('error: ', err.message)
    })
})
// servidor escuchando en el puerto 4000
server.listen(4000, () => {
    console.log('Servidor operativo, escuchando en puerto 4000...', server.address().port)
})