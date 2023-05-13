
function CreateInputTable() {
    let table = document.getElementById("InputTable")
    let row = document.createElement("tr")
    for (i = 1; i <= n; i++) {
        let cell = document.createElement("td")
        let text = document.createElement("span")
        text.innerHTML = "Object" + i;
        cell.appendChild(text)
        row.appendChild(cell)
    }
    table.appendChild(row)

    let row = document.createElement("tr")
    let cell = document.createElement("td")
    let text = document.createElement("span")
    text.innerHTML = "Mass"
    cell.appendChild(text)
    row.appendChild(cell)
    for (i = 1; i <= n; i++) {
        let cell = document.createElement("td")
        let input = document.createElement("input")
        input.type = "number"
        input.id = "Mass" + i
        cell.appendChild(input)
        row.appendChild(cell)
    }
    table.appendChild(row)

    for (i = 1; i <= 3; i++) {
        let variable = "x"
        let row = document.createElement("tr")
        let cell = document.createElement("td")
        let text = document.createElement("span")
        if (i == 2) {
            variable = "y"
        } else if (i == 3) {
            variable = "z"
        }
        text.innerHTML = variable
        cell.appendChild(text)
        row.appendChild(cell)
        for (j = 1; j <= n; j++) {
            let cell = document.createElement("td")
            let input = document.createElement("input")
            input.type = "number"
            input.id = variable + j
            input.placeholder = variable + j
        }
        table.appendChild(row)
    }


    let row = document.createElement("tr")
    let cell = document.createElement("td")
    let text = document.createElement("span")
    text.innerHTML = "Stepsize"
    cell.appendChild(text)
    row.appendChild(cell)
    let cell = document.createElement("rowspan")
    let input = document.createElement("input")
    input.type = "number"
    input.id = "Stepsize"
    cell.appendChild(input)
    row.appendChild(cell)
    table.appendChild(row)

    let row = document.createElement("tr")
    let cell = document.createElement("td")
    let text = document.createElement("span")
    text.innerHTML = "Steps"
    cell.appendChild(text)
    row.appendChild(cell)
    let cell = document.createElement("rowspan")
    let input = document.createElement("input")
    input.type = "number"
    input.id = "Steps"
    cell.appendChild(input)
    row.appendChild(cell)
    table.appendChild(row)
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
    steps = document.getElementById("Steps").value
}
