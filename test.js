function Test() {
    document.getElementById("test").innerHTML = "success"
}

function UpdateInputs() {
    for (i = 1; i <= n; i++) {
        m[i-1] = document.getElementById("Mass" + i).value
        for (j = 1; j <= 3; j++) {
            let variable = "x"
            if (j == 2) {
                variable = "y"
            } else if (j == 3) {
                variable = "z"
            }
            r[i-1][j-1] = document.getElementById(variable + i).value
        }
    }
    h = document.getElementById("Stepsize").value
}

function Test2() {
    document.getElementById("test2").innerHTML = "input"
}