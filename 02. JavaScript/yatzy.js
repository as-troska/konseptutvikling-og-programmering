const prompt = require('prompt-sync')({sigint: true});

console.log("Velkommen til Yatzy!")


prompt("Trykk enter for å kaste terningen: ")
let terninger = []
let runde = 3;

let muligheter = [
    "1: Enere",
    "2: Toere",
    "3: Treere",
    "4: Firere",
    "5: Femmere",
    "6: Seksere",
    "7: Par",
    "8: To par",
    "9: Tre like",
    "10: Fire like",
    "11: Liten straight",
    "12: Stor straight",
    "13: Hus",
    "14: Sjanse",
    "15: Yatzy"
]

let restTerninger = 5;
let beholdteTerninger = []


while (runde > 0) {
    kast(restTerninger)
    console.log("Du fikk: " + terninger)
    let behold = prompt("Skriv inn hvilke terninger du vil beholde, bruk nummer på terningene, adskilt med komma: ")

    behold = behold.split(",")

    for (let i = 0; i < behold.length; i++) {
        beholdteTerninger.push(terninger[behold[i] - 1])
    }

    if (runde === 1 && behold.length == 0) {
        for (let terning of terninger) {
            beholdteTerninger.push(terning)
        }
        restTerninger = 0
    }

    restTerninger = restTerninger - behold.length
    terninger = []
    console.log("Nåværende beholdning: " + beholdteTerninger)
    if(runde > 1) {
        prompt("Trykk enter for å kaste terningene: ") 
    } else {
        console.log("Hva vil du lagre disse som?")
        for (let mulighet of muligheter) {
            console.log(mulighet)
        }
    }
    
    runde--
}


function kast(antall) {
    for (let i = 0; i < antall; i++) {
        terninger.push(Math.floor(Math.random() * 6) + 1)
    }
}
