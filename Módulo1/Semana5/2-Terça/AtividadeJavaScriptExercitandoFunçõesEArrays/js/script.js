let garden = [
    [0,0,0,"G"],
    [0,0,"G",0],
    [0,"G",0,0],
    ["G",0,0,0]
    ]

function substituir(array) {
    for(let i = 0; i < array.length; i++) {
        if (i == "G") {
            i = 0
        }
    }
    return console.log(garden)
}


substituir(garden)