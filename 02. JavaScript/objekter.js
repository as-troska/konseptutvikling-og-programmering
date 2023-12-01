let meg = {
    navn: "Trond",
    fodselsaar: 1984,
    favorittfilm: "Persona",
    favorittall: 6,
    favorittmat: ["Pinnekjøtt", "Pizza", "Purreløk"]
}

console.log("Navn: " + meg.navn)
console.log("Fødselsår: " + meg.fodselsaar) 
console.log("Favorittfilm: " + meg.favorittfilm)
console.log("Favorittall: " + meg.favorittall)
console.log("Favorittmat: " + meg.favorittmat[0] + ", " + meg.favorittmat[1] + ", " + meg.favorittmat[2])

for (let mat of meg.favorittmat) {
    console.log(mat)
}

for (let egenskap in meg) {
    console.log(meg[egenskap])
}