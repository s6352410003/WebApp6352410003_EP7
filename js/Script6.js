//Control Statement
//Selection Statement
//if, if-else, if-else-if, switch
let a = 15

if (a < 20) {
    console.log('hello')
}

//---------------------------------------

let b = 50
if (b == 5) {
    console.log('wow....')
}
else {
    console.log('wee...')
}

//---------------------------------------

let c = 44
if (c > 100) {
    console.log('hi')
}
else if (c > 80) {
    console.log('hey')
}
else if (c > 50) {
    console.log('hello')
}
else if (c > 30) {
    console.log('hum')
}
else if (c > 0) {
    console.log('hoo')
}
else {
    console.log('555')
}

//---------------------------------------

let d = 999
switch (d) {
    case 2: console.log('aaa')
        break
    case 4, 3: console.log('bbb')
        break
    case 5: console.log('ccc')
        break
    case 9: console.log('ddd')
        break
    case 12:
    case 999:
    case 888:
    case 55:
        console.log('eee')
        break
    default: console.log('fff')
}


//Loop/Interaction/Repeat Statement
//While, do-while, for, for-in, for-of

let i = 1

while (i <= 5) {
    console.log('SAU')
    i++
}

let j = 1

do {
    console.log('SAU')
    j++
} while (j <= 5)

for (let k = 1; k <= 5; k++) {
    console.log('SAU')
}