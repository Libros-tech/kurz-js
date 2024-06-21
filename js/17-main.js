let auta = ["mini", "bmw", "skoda", "audi", "toyota", "fod", "volvo"];
let hledaneAuto = prompt("U jake znacky to ma breaknout?").toLocaleLowerCase();

for (let index = 0; index < auta.length; index++) {
    if (auta[index] == hledaneAuto) {
        break; // jakmile se spusti break, tak se zbytek cyklu uz nevykonava a cely cyklus konci
            }
            console.log(auta[index])
    
    
}
console.log("hotovo")


while(true){
    let odpovedUzivatele = prompt("jste zenaty? (ANO/NE)").toLocaleLowerCase()
    if (odpovedUzivatele != "ano" && odpovedUzivatele != "ne") {
        alert("Zadali jste spatnou odpoved, zkus-te to znovu");
        //uzivatel odpovedel neco jineho nez ano nebo ne
              }else{
            break;
        }}
console.log("hotovo")