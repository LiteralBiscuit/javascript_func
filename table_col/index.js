/**
 * @type {{author:string, era:string, love1:string, love2:string}[]}
 */
const arr =[
    {
        writer: "Balassi Bálint",
        time: "reformáció",
        lovers1: "Losonczy Anna",
        lovers2: "Dobó Krisztina"
    },
    {
        writer: "Csokonai Vitéz Mihály",
        time: "felvilágosodás",
        lovers1: "Vajda Juliána",
    },
    {
        writer: "Petőfi Sándor",
        time: "magyar romantika	",
        lovers1: "Mednyánszky Berta",
        lovers2: "Szendrey Júlia"
    },
    {
        writer: "Ady Endre",
        time: "20. század",
        lovers1: "Léda",
        lovers2: "Csinszka"
    },
]
//mat
 
const table = document.createElement("table");
document.body.appendChild(table);
 
const thead = document.createElement("thead");
table.appendChild(thead);
 
const tr = document.createElement("tr");
thead.appendChild(tr);
 
createCell("th", "Szerző neve", tr); //th1
 
createCell("th", "Korszak", tr); //th2

//tr.lastChild.colSpan=2;
const th3 = createCell("th", "Szerelmek", tr);
th3.colSpan=2;
 
const tbody = document.createElement("tbody");
table.appendChild(tbody);
 
for (const i of arr){
    const row = document.createElement("tr");
    tbody.appendChild(row);
 
    createCell("td", i.writer, row); //td1
 
    createCell("td", i.time, row); //td2

    const td3 = createCell("td", i.lovers1, row);

    if (i.lovers2 === undefined){
        //row.lastChild.colSpan=2;
        td3.colSpan=2;
    }
    else{
        createCell("td", i.lovers2, row);
    }
}

/**
 * makes a cell of given celltype,
 * writes given cellcontent inside,
 * and appends it to a given row
 * @param {string} celltype th vagy td
 * @param {string} cellcontent cella tartalma
 * @param {HTMLTableRowElement} parentrow sor amibe rakjuk
 * @returns {HTMLTableCellElement} visszatér a létrehozott cellával hogy lehessen később módosítani
 */
function createCell(celltype, cellcontent, parentrow){
    const elem = document.createElement(celltype);
    elem.innerText = cellcontent;
    parentrow.appendChild(elem);
    return elem;
}