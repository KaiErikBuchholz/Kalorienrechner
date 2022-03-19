let Kalorienziel; //erschafft Variable
let FrLm1;          //erschafft Variable FrühstückLebensmittel1
let FrLm2;
let FrLm3;
let FrLm4;
let MiLm1;          //erschafft Variable MittagessenLebensmittel1
let MiLm2;
let MiLm3;
let MiLm4;
let AbLm1;          //erschafft Variable AbendessenLebensmittel1
let AbLm2;
let AbLm3;
let AbLm4;
let SuLmG;
let Ergebnis;       //erschafft Variable Ergebnis
let KaÜb1;          //erschafft Variable Ergebnis
let KaÜbEr;         //erschafft Variable Kalorienüberziel
let KaNiÜb;         //erschafft Variable Kalorien nicht über dem Ziel

function tfAuslesen(){
    Kalorienziel = parseInt(document.getElementById("tfKalorienziel").value);
    FrLm1 = parseInt(document.getElementById("tfFrühstück1").value);
    FrLm2 = parseInt(document.getElementById("tfFrühstück2").value);
    FrLm3 = parseInt(document.getElementById("tfFrühstück3").value);
    FrLm4 = parseInt(document.getElementById("tfFrühstück4").value);
    MiLm1 = parseInt(document.getElementById("tfMittag1").value);
    MiLm2 = parseInt(document.getElementById("tfMittag2").value);
    MiLm3 = parseInt(document.getElementById("tfMittag3").value);
    MiLm4 = parseInt(document.getElementById("tfMittag4").value);
    AbLm1 = parseInt(document.getElementById("tfAbendbrot1").value);
    AbLm2 = parseInt(document.getElementById("tfAbendbrot2").value);
    AbLm3 = parseInt(document.getElementById("tfAbendbrot3").value);
    AbLm4 = parseInt(document.getElementById("tfAbendbrot4").value);

    KalorienPruefen(FrLm1);
    KalorienPruefen(FrLm2);
    KalorienPruefen(FrLm3);
    KalorienPruefen(FrLm4);
    KalorienPruefen(MiLm1);
    KalorienPruefen(MiLm2);
    KalorienPruefen(MiLm3);
    KalorienPruefen(MiLm4);
    KalorienPruefen(AbLm1);
    KalorienPruefen(AbLm2);
    KalorienPruefen(AbLm3);
    KalorienPruefen(AbLm4);


    KaNiÜb = "So viele Kalorien kannst du heute noch verbrauchen."
    Ergebnis = Kalorienziel - SuLmG
    KaÜb1 = "Du hast dein Kalorienziel überschritten. So viele Kalorien hast du zuviel verbraucht"
    KaÜbEr = Ergebnis * -1

    if (Ergebnis => 0 )
    {
        document.getElementById("ausgabe0").innerHTML = KaNiÜb;
        document.getElementById("ausgabe1").innerHTML = Ergebnis;
    }if (Ergebnis < 0){
        console.log("Du hast dein Kalorienziel überschritten.")
        document.getElementById("ausgabe2").innerHTML = KaÜb1
        document.getElementById("ausgabe3").innerHTML = KaÜbEr

    }





}



function KalorienPruefen(Kalorien){
    if(isNaN(Kalorien)){
        console.log(Kalorien + "ist keine Zahl")
    }else if (Kalorien <0){
        console.log(Kalorien + "ist keine mögliche Kalorienzahl")
    }else if(Kalorien >0){
        SuLmG = FrLm1 + FrLm2 + FrLm2 + FrLm3 + FrLm4 + MiLm1 + MiLm2 + MiLm3 + MiLm4 + AbLm1 + AbLm2 + AbLm3 + AbLm4
    }
}