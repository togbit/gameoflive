var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("."));


app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

var n = m = 80;

var matrix = [];
for (y = 0; y < n; y++) {
    matrix[y] = [];
    for (x = 0; x < n; x++) {
        matrix[y][x] = Math.floor(Math.random()*5)//([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 5]);
    }
}
io.sockets.emit('send matrix', matrix);

Grass = require('./Grass');
GrassEater = require('./GrassEater');
Gishatich = require('./Gishatich');
Kerpar = require('./Kerpar')
Kerpar$ = require('./Kerpar$')
Kerpar_ = require('./Kerpar_')

function createObject(matrix){ 
    for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
           var Gr = new Grass = new Grass(x, y, 1);
           grassArr.push(Gr)
        }
        else if (matrix[y][x] == 2) {
            matrix[y][x] = new GrassEater(x, y, 2);
        }
        else if (matrix[y][x] == 3) {
            matrix[y][x] = new Gishatich(x, y, 3);
        }
        else if (matrix[y][x] == 4) {
            matrix[y][x] = new Kerpar(x, y, 4);
        }
        else if (matrix[y][x] == 5) {
            matrix[y][x] = new Kerpar_(x, y, 5);
        }
        else if (matrix[y][x] == 6) {
            matrix[y][x] = new Kerpar$(x, y, 6);
        }
    }
}
io.sockets.emit('send matrix', matrix);
}
function game(){
    for(var i in grassArr){
        grassArr[i].mul()
    }
    for
}