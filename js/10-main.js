let barvy = [] /// toto je prázdné pole
let notebooky =["asus", "msi", "aceer", "hp"];
console.log(notebooky);

console.log("moje oblibena značka notebooku je " + notebooky[2]);

let cisla = [31, 56, 33, 43, 22];
console.log(cisla[1] + cisla[4]);

let mujnotebook = notebooky[0];
console.log(mujnotebook);


console.log(notebooky);
//push přidá hodnotu na konec
notebooky.push("apple");
console.log(notebooky)

//změna accer na intel

notebooky[2] = "intel"
console.log(notebooky)

// odstranění hp napíšu jmeno použiju splice
notebooky.splice(3, 1);
console.log(notebooky)

//vkládaní elementu na specifické místo pouzijeme splice
notebooky.splice(1,0, "goldmax")
console.log(notebooky)

// vymazaní z konce pole použijeme funkci pop
let odstraneniNotebook = notebooky.pop();
console.log(notebooky);
console.log(odstraneniNotebook);

// odstraneni ze zacatku pole pouzije se hift 
notebooky.shift();
let prvniOdstraneniNotebook = notebooky
console.log(notebooky)
console.log(prvniOdstraneniNotebook)

// toto je pole v poli
// pole v poli zabira jeden index 
let poleMixHodnot = ["tony", "Truong", "55", ["suzuky", "msi"] , "baskytara", "29"]
console.log(poleMixHodnot[3]);
console.log("tonduv mobil je :" + poleMixHodnot[2])

poleMixHodnot[3][2] = "77";
console.log(poleMixHodnot);

//pomocí length zjistíme kolik je v poli prvku
let ovoce = ["banan", "citron", "pomeranc", "ananas", "tresne"];
console.log(ovoce.length);

// ondexOf()
// je to funkce 

let nakupniKosik = [ "rohlik", "rohlik", "pomeranc", "tunka", "olej", "kobliha ", "pomeranc"]
console.log (nakupniKosik.indexOf("zubni pasta"));  // vysledek toho ze to tam neni je vysledek -1 to znamená že hledaná hodnota v poli neni 
console.log (nakupniKosik.indexOf("zubni pasta"));  // vysledek toho ze to tam neni je vysledek -1 to znamená že hledaná hodnota v poli neni 
console.log (nakupniKosik.indexOf("tunak")); // vypíse se 3
console.log (nakupniKosik.indexOf("pomeranc")); // vypíse se 2  číslo vždy reprezentuje cislo kde je
console.log (nakupniKosik.indexOf("pomeranc", 3)); // vypíse se 6  číslo vždy reprezentuje cislo kde je
// jak zjistime poranč na 6 tim ze napíšeme 3 je to tím že začne hledat od pole č3 dál
