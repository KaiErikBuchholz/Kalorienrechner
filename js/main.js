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

    Ergebnis = Kalorienziel - SuLmG

    console.log(Ergebnis)

    if (Ergebnis > 0 )
    {
        document.getElementById("ausgabe").innerHTML = Ergebnis;
    }





}
