/**
*  @type {[war:string, team1:string, team1Size:string team2:string team2Size:string]}
*/
//mat
const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const table = document.createElement("table");
const thead = document.createElement("thead");
const tr = document.createElement("tr");
document.body.appendChild(table);
table.appendChild(thead);
thead.append(tr)

const thSzovegek = ["Harc megnevezése", "Szembenálló felek", "Haderő"]

for (const cim of thSzovegek) {
    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = cim;
}

const tbody = document.createElement("tbody");
table.appendChild(tbody);

for (const i of arr) {
    const tr1 = document.createElement("tr");
    tbody.appendChild(tr1);

    const td1 = document.createElement("td");
    td1.innerText = i.war;
    tr1.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = i.team1;
    tr1.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = i.team1Size;
    tr1.appendChild(td3);

    if(i.team2){
        td1.rowSpan = 2;
        const tr69 = document.createElement("tr")
        tbody.appendChild(tr69);

        const td = document.createElement("td");
        const td69 = document.createElement("td");
        td.innerText = i.team2
        td69. innerText = i.team2Size;
        
        tr69.appendChild(td);
        tr69.appendChild(td69)
    }
}