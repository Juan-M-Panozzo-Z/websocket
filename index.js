// crear un websocket y escuchar en el puerto 8080
var WebSocketServer = require('ws').Server, wss = new WebSocketServer({port: 8080});
// cuando un cliente se conecta, este metodo es llamado
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('received: %s', message);
    });
    ws.send('something');
});
