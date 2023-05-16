function Load() {
    CreateInputTable()
}

window.setInterval(() => {
  UpdateInputs()
 SetScene()
}, 500);

function TestUpd() {
    document.getElementById("testupd").innerHTML = "upd"
}