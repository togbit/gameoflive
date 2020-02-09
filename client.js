var socket = io();
side = 20
function setup(){
    createCanvas(40 * side, 40 * side);
    background('#acacac')
}

function nkarel(matrix){
    

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1) {
               
                fill("green");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
                
                
            }
            else if (obj == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (obj == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
                
            }
            else if (obj == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (obj == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (obj == 5) {
                fill("#FF4C82");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
            else if (obj == 6) {
                fill("#000000");
                rect(x * side, y * side, side, side);
                matrix[y][x].acted = false;
            }
        }
    }
}
    socket.on('send matrix', nkarel)

    function kill() {
        socket.emit("kill")
    }
