// A Bubbly Programming Language

function start(f){
    const arr = []
    return f(arr)
}

function push(arr){
    return function(n){
        return function(f){
            return f([...arr, n])
        }
    }
}

function div(arr){
    const res = ~~(arr.pop() / arr.pop())
    return function(f){
        return f([...arr, res])
    }
}

function sub(arr){
    const res = arr.pop() - arr.pop()
    return function(f){
        return f([...arr, res])
    }
}

function mul(arr){
    const res = arr.pop() * arr.pop()
    return function(f){
        return f([...arr, res])
    }
}

function add(arr){
    const res = arr.pop() + arr.pop()
    return function(f){
        return f([...arr, res])
    }
}


function end(arr){
    return arr.pop()
}