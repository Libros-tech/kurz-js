let poleCisel = [13, 11, 16, 14, 17, 18, 24, 26, 25, 19, 10];

for (let i = poleCisel.length -1; i >=0; i--){
    console.log(poleCisel[i])
}

/// odstraneni na sudych pozicich 
 
console.log(poleCisel);
for (let i = 0; i < poleCisel.length; i++) {
    poleCisel.splice(i, 1)
}
console.log(poleCisel)

// iterace ze je pole prazdne


for (let i = poleCisel.length -1; i >=0; i--){
    poleCisel.splice(i, 1)
}
console.log(poleCisel)
