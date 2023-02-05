function receivesAFunction(callback) {
    callback()
}

function callback() {

}

function returnsANamedFunction() {
    return callback
}

function returnsAnAnonymousFunction() {
    return function (){
        
    }
}