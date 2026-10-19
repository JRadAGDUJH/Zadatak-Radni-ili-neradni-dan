const dani = ["", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota", "nedjelja"]

function PosebniDani(dan) {
    if(dan < 6) console.log("Radni Dan");
    else console.log("Neradni Dan");
    if (dan === 1) console.log("Ja najviše volim JS od svih programskih jezika");
    if (dan === 4) console.log("Mali petak!");
    if (dan === 5) console.log("Vikend na Vidiku!");
}

let danas = new Date().getDay();
if (danas === 0) danas = 7;

console.log("Danas je "+ dani[danas]);
PosebniDani(danas);


const unos = prompt("Unesi broj (1-17) ili naziv dana");
let dan;

if(unos % 1 === 0 && unos >=1 && unos <= 17) {
    dan =  unos % 7 ;
    if(dan === 0) dan = 7;
} else if (unos === "ponedjeljak" || unos === "Ponedjeljak") dan = 1;
else if (unos === "utorak" || unos === "Utorak")     dan = 2;
else if (unos === "srijeda" || unos === "Srijeda")    dan = 3;
else if (unos === "četvrtak" || unos === "Četvrtak")   dan = 4;
else if (unos === "petak" || unos === "Petak")      dan = 5;
else if (unos === "subota" || unos === "Subota")     dan = 6;
else if (unos === "nedjelja" || unos === "Nedjelja")   dan = 7;

if(!dan) console.error("neispravan dan");
else{
    console.log("Dan je "+ dani[dan]);
    PosebniDani(dan);
}
