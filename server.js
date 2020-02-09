var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

GishatichArr = [];
grassArr = [];
grassEaterArr = [];
matrix = [];
KerparArr = [];
KerparArr_ = [];
KerparArr$ = [];

var n = 50;

weath = "winter";
Grass = require("./Grass");
GrassEater = require("./GrassEater");
Gishatich = require("./Gishatich");
Kerpar = require("./Kerpar");
Kerpar$ = require("./Kerpar$");
Kerpar_ = require("./Kerpar_");

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.floor(rand(0, 7))

    }
}

io.sockets.emit("send matrix", matrix)



function createObject() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 1
                grassArr.push(new Grass(x, y, 1))
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 2
                grassEaterArr.push(new GrassEater(x, y, 2))
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] = 3
                GishatichArr.push(new Gishatich(x, y, 3))
            }
            else if (matrix[y][x] == 4) {
                matrix[y][x] = 4
                KerparArr.push(new Kerpar(x, y, 4))
            }
            else if (matrix[y][x] == 5) {
                matrix[y][x] = 5
                KerparArr_.push(new Kerpar_(x, y, 5))
            }
            else if (matrix[y][x] == 6) {
                matrix[y][x] = 6
                KerparArr$.push(new Kerpar$(x, y, 6))
            }
        }
    }
    io.sockets.emit('send matrix', matrix)
}

function game() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in GishatichArr) {
        GishatichArr[i].eat();
    }
    for (var i in KerparArr) {
        KerparArr[i].varak();
    }
    for (var i in KerparArr_) {
        KerparArr_[i].virus();
    }
    for (var i in KerparArr$) {
        KerparArr$[i].move();
    }
    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)


function kill() {
    grassArr = [];
    grassEaterArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}

////

io.on('connection', function (socket) {
    createObject();
    socket.on("kill", kill);
    
});


var statistics = {};

setInterval(function () {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.Gishatich = GishatichArr.length;
    statistics.Kerpar = KerparArr.length;
    statistics.Kerpar$ = KerparArr$.length;
    statistics.Kerpar_ = KerparArr_.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
        console.log("send")
    })
}, 1000)