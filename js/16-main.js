let poleBarev =["cervena", "modra", "bila", "zluta", "cerna", "hneda", "zelena", "seda", "fialova"];

/*let index = 0
while (index <=8) {
    console.log(poleBarev[index])
    index++;
}*/// jedna možnost 

// druha moznost
let index = 0
let pocetPrvku = poleBarev.length
while (index < pocetPrvku) {
    console.log(poleBarev[index])
    index++
}

console.log("-------------------------------------");

for (let index = 0; index < poleBarev.length; index++) {
    console.log(poleBarev[index]);
}