const user = {
    username: "Lelouching",
    password: "123",
};

function alterarName(newName) {
    user.username = newName
}

function alterarPass(newPass) {
    user.password = newPass
}

function logIn({username, password}) {
    if(user.username == username && user.password == password) {
        console.log(`${username} Logou com sucesso`)
    } else {
        console.log("Usuário ou senha inválida")
    }
}

alterarName("Lelouching1")

const userAccess = {
    username: "Lelouching",
    password: "123",
}

logIn(userAccess);