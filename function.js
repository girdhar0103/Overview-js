function greet(name) {

    console.log(`Hello ${name}`);
    
}

greet("Girdhar")
greet("Rishi")


let globalVar = "I am global"

function modifyGlobal() {
    globalVar = "I am modified"
    let blockScopeVar = "I am blocked-scoped"
    console.log(blockScopeVar);
    
}

modifyGlobal()

let config = function (){}