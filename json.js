const uresObj = {}

uresObj.nev = "Tsaba"
uresObj.kor = 19

const json_szoveg = JSON.stringify(uresObj)

const jsonString = '{"nev": "Patyi", "kor": 20}'
console.log(jsonString)
const objektum = JSON.parse(jsonString)
console.log(objektum)

objektum.kor = 26
console.log(objektum)
const frissitett_json = JSON.stringify(objektum)
console.log(frissitett_json + "frissitett json")

delete objektum.kor
console.log(objektum)

const visszaalakitott = JSON.parse(frissitett_json)
if ("nev" in visszaalakitott) {
    console.log("Letezik a kulcs " + visszaalakitott.nev)
}

const tombgyumolcsok = []

tombgyumolcsok.push("alma")
tombgyumolcsok.push("korte")
tombgyumolcsok.push("dinnye")

const json_tomb = JSON.stringify(tombgyumolcsok)
console.log(json_tomb)

tanulok = [
    {nev: "Pista", kor: 19},
    {nev: "Tsaba", kor: 23},
    {nev: "Nadam", kor: 20},
    {nev: "Horty", kor: 28}
]

const fiatalok = []
for (const taulok of tanulok) {
    if (tanulok.kor < 25) {
        fiatalok.push(tanulo)
    }
}
console.log(fiatalok)

const fiatalokfilter = tanulok.filter(tanulo => tanulo.kor < 25)
console.log(fiatalokfilter)
const tanulok2 = structuredClone(tanulok)
const tanulok3 = structuredClone(tanulok)

for (let i = 0; i < tanulok.length; i++) {
    for (let j = 0; j < tanulok.length - 1; j++) {
        if (tanulok[j].kor < tanulok[j + 1].kor) {
            let tmp = tanulok[j]
            tanulok[j] = tanulok[j + 1]
            tanulok[j + 1] = tmp
        }
    }
}
console.log(tanulok)
tanulok2.sort((a, b) => a.kor - b.kor)
console.log(tanulok2)

tanulok3.sort((a, b) => a.kor - b.kor).reverse()
console.log(tanulok2)

