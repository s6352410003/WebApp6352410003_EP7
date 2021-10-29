//Function
//1 no return no parameter
function funcNa() {
    console.log('Na na na')
}


//2 no return have parameter
function funcNi(x, y) {
    let a = x + y
    console.log('a มีค่า = ' + a)
}


//3 have return no parameter
function funcWow() {
    return 999 + 1;
}


//4 have return have parameter
function funcWee(x, y, z) {
    let sum = x + y + z
    return 555 + sum;
}

funcNa()
funcNi(10, 20)

console.log(funcWow())

let total = funcWee(10, 20, 30)
// alert(total)

//-----------------------------------

function funcA(x, y = 20) {
    console.log(x + y)
}

funcA(10, 100)
funcA(50)

//----------------------------------
