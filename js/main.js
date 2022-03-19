let Kalorienziel;
let FrLm1;
let FrLm2;
let FrLm3;
let FrLm4;
let MiLm1;
let MiLm2;
let MiLm3;
let MiLm4;
let AbLm1;
let AbLm2;
let AbLm3;
let AbLm4;
let SuLmG;
let Ergebnis;
let KaÜb1;
let KaÜbEr;
let KaNiÜb;

function tfAuslesen() {
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

    SuLmG = FrLm1 + FrLm2 + FrLm3 + FrLm4 + MiLm1 + MiLm2 + MiLm3 + MiLm4 + AbLm1 + AbLm2 + AbLm3 + AbLm4

    KaNiÜb = "So viele Kalorien kannst du heute noch verbrauchen."
    Ergebnis = Kalorienziel - SuLmG
    KaÜb1 = "Du hast dein Kalorienziel überschritten. So viele Kalorien hast du zuviel verbraucht"
    KaÜbEr = Ergebnis * -1

    if (Ergebnis > 0 )
    {
        document.getElementById("ausgabe0").innerHTML = KaNiÜb;
        document.getElementById("ausgabe1").innerHTML = Ergebnis;
    }if (Ergebnis < 0){
        console.log("Du hast dein Kalorienziel überschritten.")
        document.getElementById("ausgabe2").innerHTML = KaÜb1
        document.getElementById("ausgabe3").innerHTML = KaÜbEr

    }





}
