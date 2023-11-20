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


//Redigere arrayer

//Lager et tomt array
let etArray = []

//Legger til elementer i slutten av arrayet
etArray.push("Hei")
etArray.push("Hallo")

//Fjerner det siste elementet i arrayet
etArray.pop()

//Legger til elementer i starten av arrayet
etArray.unshift("Bonjour")

//Fjerner det første elementet i arrayet
etArray.shift()

//Endrer et gitt element i arrayet
etArray[0] = "Bonjour"

//Logger innholdet i arrayet
console.log(etArray)

//Lager et array med navn på byer
let byer = ["Oslo", "Bergen", "Trondheim", "Stavanger", "Kristiansand", "Tromsø", "Bergen"]

//Finner indexen til første instans av Bergen
console.log(byer.indexOf("Bergen"))

//Finner indexen til Alta, som ikke eksistere i arrayet. Da returneres -1
console.log(byer.indexOf("Alta"))

//Finner indexen til siste instans av Bergen
console.log(byer.lastIndexOf("Bergen"))

//Finner indexen til første instans av Bergen etter index 3
console.log(byer.indexOf("Bergen", 3))

//Fjerner Oslo fra arrayet (index 0)
byer.splice(0, 1)
console.log(byer)

//Går gjennom arrayet og fjerner alle instanser av Bergen
for (let i = 0; i < byer.length; i++) {
    if (byer[i] === "Bergen") {
        byer.splice(i, 1)
    }
}