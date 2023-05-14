var n = 3
var grav = 6.6743e-11
var m = [0, 0, 0]
var r = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
var v = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
var h = 1

function Calculate() {
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= 3; j++) {
            let accel = 0
            r[i - 1][j - 1] += h * v[i - 1][j - 1]
            for (k = 1; k <= n && k != i; k++) {
                accel += (grav * m[k - 1] * (r[k - 1][j] - r[i - 1][j])) / ((Math.hypot(r[k - 1][0] - r[i - 1][0], r[k - 1][1] - r[i - 1][1], r[k - 1][2] - r[k - 1][2])) ** 3)
            }
            v[i - 1][j - 1] += h * accel
        }
    }
}
