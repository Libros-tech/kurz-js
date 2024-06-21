let vekUzivatele = +(prompt("Kolik je vam let"));
let jeMuzAnoNe = +prompt("jste muz?").toLowerCase();
console.log(vekUzivatele);

// vysledkem jeboolean  () je true / false true splnena podminka, false nesplnena podminka
// z celeho ifu se vykona jen jedna vetev
if (vekUzivatele >= 18) {
    alert("uz vam 18 bylo muzete si vybrat alko napoje")
}else if(vekUzivatele >= 15){
    alert("18 ti neni ale 15 ti bylo dej si redbull")
}else{
    alert("nejste plnolety nemuzu vam nabidnout alko napoj")
}

// vnoreni if 
// case sensitive - rozlisuje velka a mala pismena
/*if(vekUzivatele >= 18) {
    if(jeMuzAnoNe == "ano") {
        alert("vitejte v klubu gentelnabu");
    }else if (jeMuzAnoNe == "ne") {
        alert("do klubu mohou vstoupit poze muzi.")    }  
    else {
        alert("zadali jste nevalidni odpoved")    
    } 
}else{
    alert("Nebylo vam 18, nemuzes vstoupit do klubu gentlemanu.")
}
*/
//&& logický operátor AND & píšeme altgr +C &&
// operátor funguje když jsou obe odpovedi true což je ano 
// pokud obe podminky vrati true tak obe podminky budou true pokud plati jen jedna podminka tak spadne cel a odpoved do ne

if (vekUzivatele >=18 && jeMuzAnoNe =="ano") {
    alert("muzete vstoupit 18 vam už bylo")

} else{alert("Nebylo vam 18, nemuzes vstoupit do klubu gentlemanu.")
}

//  operátor OR
//(pipeline) || píse se praví alt + W
// u operatoru or staci aby alespon jeden byl true 
// resi aby alespon jeden byl true coz znamena platny 

let clenstvi = "bronz"
if (clenstvi =="zlate" || clenstvi == "stribrne" ) {
    alert("muzete vstoupit clenstvi je pro zlate a stribrne cleny")
}else { 
    alert("bohuzel clenstvi je jen pro zlate a stribrne cleny ")
}