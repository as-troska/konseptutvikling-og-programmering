// Oppgave 1
// Lag en array med tallene 0, 1, 2, 3, 4, 6, 7, 8, 9 og 10 og gi den et passende navn.

let tall = [0, 1, 2, 3, 4, 6, 7, 8, 9, 10]

// Oppgave 2
// Skriv ut alle partallene fra arrayen i konsollen.

console.log(tall[2])
console.log(tall[4])
console.log(tall[6])
console.log(tall[8])
console.log(tall[10])

for (let i = 2; i < tall.length; i += 2) {
    console.log(tall[i])
}

for (let tallet of tall) {
    if (tallet % 2 === 0 && tallet !== 0) {
        console.log(tallet)
    }
}

// Oppgave 3
// a) Lag arrayen let tall = [2, 4, 6, 8] ;.

let tall3 = [2, 4, 6, 8]

// b) Bruk metodene vi har sett på, og gjør om arrayen tall til [4, 6] .

tall3.shift()
tall3.pop()
console.log(tall3)

// c) Legg til tallet 5 mellom tallene 4 og 6, slik at arrayen nå inneholder [4, 5, 6] .

tall3.splice(1, 0, 5)

// d) Gjør om arrayen slik at den inneholder [3, 4, 5, 6, 7] .

tall3.unshift(3)
tall3.push(7)

// e) Gjør om arrayen slik at den inneholder ["tre", 4, "fem", 6, "syv"] .

tall3[0] = "tre"
tall3[2] = "fem"
tall3[4] = "syv"

// Oppgave 4
// Ta igjen utgangspunkt i arrayen du laget i forrige oppgave.
// a) Hva tror du skjer hvis du skriver tall.indexOf(10) eller tall.lastIndexOf(10) ?

console.log(tall3.indexOf(10))
console.log(tall3.lastIndexOf(10))

// b) Prøv ut begge variantene og se hva du får. Hvordan tolker du resultatet?

console.log("10 finnes ikke i arrayen, derfor returneres -1")

// c) Ta en titt på dokumentasjonen for indexOf . Ser du hvorfor metoden returnerer den verdien du fikk? 

console.log("Return value:")
console.log("The first index of searchElement in the array; -1 if not found.")

// Oppgave 5
// a) Lag en array med 20 forskjellige tall. Velg noen negative og noen positive tall.

let tall5 = [5, 12, 335, 74, -46, -2245, 639, 0, 500, -500, 256, -452, 1, 2, 3, 4, 5, 6, 7, 8]

// b) Bruk programmet ovenfor for å finne den største verdien i arrayen. Sjekk at du finner riktig tall. 
let storst = 0

for (let i = 0; i < tall5.length; i++) {
    if (tall5[i] > storst) {
        storst = tall5[i]
    }
}

let storste = Math.max(...tall5)

console.log("Største tall: " + storst)

// c) Skriv et program som finner den minste verdien i arrayen. Sjekk at du finner riktig tall.

let minst = 0

for (let i = 0; i < tall5.length; i++) {
    if (tall5[i] < minst) {
        minst = tall5[i]
    }
}

console.log("Minste tall: " + minst)

// d) Skriv et program som finner variasjonsbredden for verdiene i arrayen. Variasjonsbredde er forskjellen mellom den største og den minste verdien i et datasett. 

function variasjonsbredde(array) {
    let storst = 0;
    let minst = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > storst) {
            storst = array[i]
        }
        if (array[i] < minst) {
            minst = array[i]
        }
    }
    return storst - minst
}

console.log("Variasjonsbredde: " + variasjonsbredde(tall5))

// e) Skriv et program som finner gjennomsnittet av verdiene i arrayen. 

function gjennomsnitt(array) {
    let sum = 0

    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length
}

console.log("Gjennomsnitt: " + gjennomsnitt(tall5))

// Oppgave 6
// Gjenta oppgave 5 ovenfor, men denne gangen skal du lage funksjoner som får en array som parameter. Du skal altså lage funksjoner som finner minste og største verdi, variasjonsbredden og gjennomsnittet. Husk at én funksjon kan bruke andre funksjoner.

function storste(array) {
    let storste = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > storste) {
            storste = array[i]
        }
    }

    return storste
}

function minste(array) {
    let minste = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minste) {
            minste = array[i]
        }
    }

    return minste
}

function variasjonsbredde2(array) {
    return storste(array) - minste(array)
}

console.log("Største tall: " + storste(tall5))
console.log("Minste tall: " + minste(tall5))
console.log("Variasjonsbredde: " + variasjonsbredde2(tall5))
console.log("Gjennomsnitt: " + gjennomsnitt(tall5))

// Oppgave 7
// Lag en yatzy-funksjon. Funksjonen skal motta to arrayer som parametre. Den ene skal inneholde fem tall (terningkast) og den andre skal inneholde de verdiene du ønsker å ikke spare på. Hvis tallene er [1, 2, 1, 1, 1] , så vil du kanskje spare på enerne og ikke spare på [2] . Alternativt kan array nummer to inneholde posisjonene til tallene du ikke vil spare på. Hvis array nummer to er helt tom, trilles alle fem terningene.

function yatzy(terninger, ikkeSpar) {
    
    for (let i = 0; i < terninger.length; i++) {
        if (ikkeSpar.includes(terninger[i])) {
            terninger[i] = Math.floor(Math.random() * 6) + 1
        }
    }

    return terninger
}

let kast = [1, 3, 4, 1, 1]
let ikkeSpar = [3, 4]

console.log(yatzy(kast, ikkeSpar))

// Oppgave 8
// Lag en todimensjonal array som består av tre arrayer, hver av de tre arrayene skal inneholde tre tall. Tegn en tabell (for hånd) som viser indeksene til hver verdi i den todimensjonale arrayen.

console.log("___________________")
console.log("| 0,0 | 0,1 | 0,2 |")
console.log("| 1,0 | 1,1 | 1,2 |")
console.log("| 2,0 | 2,1 | 2,2 |")
console.log("-------------------")

// Oppgave 9
// Lag en todimensjonal array som inneholder en gangetabell. Du skal kunne angi faktorer som indekser og få ut produktet av dem som verdi. Det vil for eksempel bety at gangetabell[3][7] skal inneholde verdien 21.

let gangetabell = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
    [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
    [0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
    [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
    [0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
]

console.log(gangetabell[3][5])
console.log(gangetabell[10][10])
console.log(gangetabell[0][5])
console.log(gangetabell[3][7])
console.log(gangetabell[7][3])

// Oppgave 10
// Lag sorterte versjoner av følgende arrayer:
// let array1 = [2, 1, 7, 5];
// let array2 = ["melon", "eple", "appelsin", "ananas", "pære"];
// let array3 = [2, 10, 104, 17, 82, 109];

let array1 = [2, 1, 7, 5]
array1.sort()
console.log(array1)

let array2 = ["melon", "eple", "appelsin", "ananas", "pære"]
array2.sort()
console.log(array2)

let array3 = [2, 10, 104, 17, 82, 109]
array3.sort((a, b) => a - b)
console.log(array3)



// Oppgave 11
// Legg til linjen console.log(a + " - " + b + " = " + (a - b)); i sammenligningsfunksjonen din. Prøv å sortere en usortert array som består av tall, og se hva som kommer i konsollen. Kan du se hvordan nettleseren din sorterer tallene?

function sammenlignFunksjon(a, b) {
    console.log(a + " - " + b + " = " + (a - b));
    return a - b;
}

array3 = [2, 10, 104, 17, 82, 109]
array3.sort(sammenlignFunksjon)
console.log(array3)

// Oppgave 12
// Lag en «omvendt» versjon av sammenligningsfunksjonene du laget i oppgave 10, slik at arrayene blir sortert i omvendt rekkefølge. Klarer du å skrive om funksjonen slik at den kan sortere tekstene i 10b i omvendt rekkefølge? 

function sammenlignFunksjon2(a, b) {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}

let array4 = ["melon", "eple", "appelsin", "ananas", "pære"]
array4.sort(sammenlignFunksjon2)

console.log(array4)

// Oppgave 13
// Utfordring: Sorter personene i denne arrayen etter alder: let personer = [["Hans", 12], ["Nils", 3], ["Sofie", 5]]; . I denne oppgaven må du lage en ny sammenligningsfunksjon.

let personer = [["Hans", 12], ["Nils", 3], ["Sofie", 5]]

function sammenlignFunksjon3(a, b) {
    return a[1] - b[1]
}   

personer.sort(sammenlignFunksjon3)

console.log(personer)