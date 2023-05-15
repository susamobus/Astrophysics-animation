function Test() {
    document.getElementById("test").innerHTML = "success"
}

function CreateInputTable() {
    let table = document.getElementById("inputtable");
    /*
    let row = document.createElement("tr");
    for (let i = 1; i <= 3; i++) {
        let cell = document.createElement("td")
        let text = document.createElement("span")
        text.innerHTML = "Object" + i
        cell.appendChild(text)
        row.appendChild(cell)
    }
    table.appendChild(row)
 
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let text = document.createElement("span"); 
    text.innerHTML = "Mass"
    cell.appendChild(text)
    row.appendChild(cell)
    for (let i = 1; i <= 3; i++) {
        let cell = document.createElement("td")
        let input = document.createElement("input")
        input.className = "TableInput"
        input.type = "number"
        input.id = "Mass" + i
        cell.appendChild(input)
        row.appendChild(cell)
    }
    table.appendChild(row)

    for (let i = 1; i <= 3; i++) {
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
        for (let j = 1; j <= 3; j++) {
            let cell = document.createElement("td")
            let input = document.createElement("input")
            input.className = "TableInput"
            input.type = "number"
            input.id = variable + j
            input.placeholder = variable + j
        }
        table.appendChild(row)
    }

*/
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let text = document.createElement("span");
    text.innerHTML = "Stepsize"
    cell.appendChild(text)
    row.appendChild(cell)
   
    let cell2 = document.createElement("td");
    let input = document.createElement("input");
    input.className = "TableInput"
    input.type = "number"
    input.id = "Stepsize"
    cell.appendChild(input)
    row.appendChild(cell)
    table.appendChild(row)*/
    
}


function Test2() {
    document.getElementById("test2").innerHTML = "input"
}