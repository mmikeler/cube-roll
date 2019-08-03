// Зависимости
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);

var gameVersion = 'Версия игры: 1.0.1 alpha'

var port = process.env.PORT || 5000;
app.set('port', port);
app.use('/', express.static(__dirname + '/game'));

// Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '/index.html'));
});

// Запуск сервера
server.listen(port, function() {
    console.log('Запускаю сервер на порте ' + port);
});
