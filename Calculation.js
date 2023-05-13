var n = 3
var m = [0,0,0]
var r = [[0,0,0],[0,0,0],[0,0,0]]
var v = [[0,0,0],[0,0,0],[0,0,0]]
var h = 1
var steps = 1

function Calculate() {
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= 3; j++) {
            r[i-1][j-1] += h * v[i-1][j-1]
            v[i-1][j-1] += h 
        }
    }
}
