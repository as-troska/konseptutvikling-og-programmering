function tilfeldigHilsen() {
    let tilfeldigTallAvrundet = tilfeldigTall(3)

    // if (tilfeldigTallAvrundet === 0) {
    //     console.log("Hei verden!")
    // } else if (tilfeldigTallAvrundet === 1) {
    //     console.log("Hello world!")
    // } else if (tilfeldigTallAvrundet === 2) {
    //     console.log("Bonjour le monde!")
    // }

    let hilsener = ["Hei verden!", "Hello world!", "Bonjour le monde!"]
    console.log(hilsener[tilfeldigTallAvrundet])
}

function magic8ball() {
    let tilfeldigTallAvrundet = tilfeldigTall(4)

    if (tilfeldigTallAvrundet === 0) {
        console.log("Du kommer til å lide en fordelig død")
    } else if (tilfeldigTallAvrundet === 1) {
        console.log("Du vil få svi for dine synder")
    } else if (tilfeldigTallAvrundet === 2) {
        console.log("Himmelen vil falle i hodet ditt")
    } else if (tilfeldigTallAvrundet == 3) {
        console.log("Du vil bli rik")
    }

    switch (tilfeldigTallAvrundet) {
        case 0:
            console.log("Du kommer til å lide en fordelig død")
            break;
        case 1:
            console.log("Du vil få svi for dine synder")
            break;
        case 2:
            console.log("Himmelen vil falle i hodet ditt")
            break;
        case 3:
            console.log("Du vil bli rik")
            break;
        default:
            console.log("Du vil leve et langt og lykkelig liv")
    }


}

tilfeldigHilsen();


function tilfeldigTall(hoyesteTall) {
    let tilfeldigTall = Math.random();
    let tilfeldigTallAvrundet = Math.floor(tilfeldigTall * hoyesteTall)
    return tilfeldigTallAvrundet
}


console.log(tilfeldigTall(10))