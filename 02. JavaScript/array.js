//Lag en array med tallene 0, 1, 2, 3, 4, 6, 7, 8, 9 og 10 og gi den et passende navn.
let tall = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Skriv ut alle partallene fra arrayen i konsollen.
//Variant 1
console.log(tall[2])
console.log(tall[4])
console.log(tall[6])
console.log(tall[8])
console.log(tall[10])

//Variant 2
for (let i = 2; i < tall.length; i += 2) {
    console.log(tall[i])
}

//Variant 3
for (let tallet of tall) {
    if (tallet % 2 === 0 && tallet !== 0) {
        console.log(tallet)
    }
}