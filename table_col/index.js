/**
 * @type {{author:string, era:string, love1:string, love2:string}[]}
 */
const arr = [
    {
        author: "Balassi Bálint",
        era: "reformáció",
        love1: "Losonczy Anna",
        love2: "Dobó Krisztina"
    },
    {
        author: "Csokonai Vitéz Mihály",
        era: "felvilágosodás",
        love1: "Vajda Juliána",
    },
    {
        author: "Petőfi Sándor",
        era: "magyar romantika",
        love1: "Mednyánszky Berta",
        love2: "Szendrey Júlia"
    },
    {
        author: "Ady Endre",
        era: "20. század",
        love1: "Léda",
        love2: "Csinszka"
    }
];

const table = document.createElement("table");
document.body.appendChild(table);

const thead = document.createElement("thead");
const tr = document.createElement("tr");
const th1 = document.createElement("th");
const th2 = document.createElement("th");
const th3 = document.createElement("th");

table.appendChild(thead);
thead.appendChild(tr);
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

th1.innerText = "Szerzők";
th2.innerText = "Korszak";
th3.innerText = "Szerelmek";
th3.colSpan = 2;

const tbody = document.createElement("tbody");

table.appendChild(tbody)

for(let i = 0; i < arr.length; i++){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");

    td1.innerText = arr[i].author;
    td2.innerText = arr[i].era;
    td3.innerText = arr[i].love1;
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    if(!arr[i].love2){
        td3.colSpan = 2;
    }
    else{
        const td4 = document.createElement("td");
        td4.innerText = arr[i].love2;
        tr.appendChild(td4);
    }

    tbody.appendChild(tr);
};		