function Test() {
    document.getElementById("test").innerHTML = "success"
}

function CreateInputTable() {
    let table = document.getElementById("inputtable");
    
    let row = document.createElement("tr");
    for (let i = 1; i <= 3; i++) {
        let cell = document.createElement("td")
        let text = document.createElement("span")
        text.innerHTML = "Object" + i
        cell.appendChild(text)
        row.appendChild(cell)
    }
    table.appendChild(row)
 
    let row2 = document.createElement("tr");
    let cell2 = document.createElement("td");
    let text2 = document.createElement("span"); 
    text2.innerHTML = "Mass"
    cell2.appendChild(text2)
    row2.appendChild(cell2)
    for (let i = 1; i <= 3; i++) {
        let cell = document.createElement("td")
        let input = document.createElement("input")
        input.className = "TableInput"
        input.type = "number"
        input.id = "Mass" + i
        cell.appendChild(input)
        row.appendChild(cell)
    }
    table.appendChild(row2)

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


    let row3 = document.createElement("tr");
    let cell3 = document.createElement("td");
    let text3 = document.createElement("span");
    text3.innerHTML = "Stepsize"
    cell3.appendChild(text3)
    row3.appendChild(cell3)
   
    let cell4 = document.createElement("td");
    let input4 = document.createElement("input");
    input4.className = "TableInput"
    input4.type = "number"
    input4.id = "Stepsize"
    cell4.appendChild(input4)
    row4.appendChild(cell4)
    table4.appendChild(row4)
    
}


function Test2() {
    document.getElementById("test2").innerHTML = "input"
}