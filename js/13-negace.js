// negace !
// pri pouzití ! se odpoved prevráti na false  to znamená ze odpoved se prevrátí z ano na ne
console.log(!true);
console.log(!(5 + 4 ==  9));
let zvire = "pes"
if(zvire != "pes"){
    console.log("aaaaaaaaaa");
}

// ==, !==
//toto kontroluje zda se jedná o datový typ
if (5 === "5") {
    console.log("bbbbbbbbbbb")
}

let hodnota = "Tony"
console.log(ture);  //true
console.log(false);  //false
console.log(false || true); // operátor OR == staci aby jedno bylo true == true
console.log(false && true); // operátor END == obe dve strany musi byt true == vyjde false 
console.log(hodnota == "tonda" || (3 + 5) == 8); //jedna strana  pred or je false , druhá strana je true vysledek == true
console.log(hodnota.length == 4 && (false || true) &&(false == false)); // pri porovnani vsech hodnot je true ,, true , true , true, vysledek true
console.log((6 + 7 ) != 13 || (!true)||("tony" == hodnota.toLocaleUpperCase() && hodnota.length <= 10)); // celkovy vysledek je true , false, false, true ,true, vysledek true