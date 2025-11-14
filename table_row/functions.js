/**
 * @typedef {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2? : string, mu2? : string}} CountryWriters
 */
/**
 * 
 * @param {HTMLTableSectionElement} tableBody 
 * @param {CountryWriters} writerRow
 */
function renderTableRow(tableBody, writerRow){
        const tr = document.createElement("tr");
 
        tableBody.appendChild(tr);
        const td1 = createTableCell("td", writerRow.nemzetiseg, tr);
        const td2 = createTableCell("td", writerRow.szerzo1, tr);
        const td3 = createTableCell("td", writerRow.mu1, tr);

        td1.addEventListener("click", function (e)
        {
            const target = e.target;
            const parentRow = target.parentElement;
            const tbodyOrigin = parentRow.parentElement;
            const markedCell = tbodyOrigin.querySelector(".marked");
 
            if (markedCell !== null) {
                markedCell.classList.remove("marked");
            }
            target.classList.add("marked");
        }
    )
 
        if(writerRow.szerzo2)
        {
            td1.rowSpan = 2;
            const tr2 = document.createElement("tr");
            const td4 = createTableCell("td", writerRow.szerzo2, tr2);
            const td5 = createTableCell("td", writerRow.mu2, tr2);
            tableBody.appendChild(tr2);
        }
}


/**
 * @param {CountryWriters[]} array
 */
function renderTableBody(array)
{
    const tbodyValtozo = document.getElementById("tbody");
    tbody.innerHTML = "";
 
    for(const obj of array){
        renderTableRow(tbodyValtozo, obj)
    }
}


/**
 * 
 * @param {"th" | "td"} cellType 
 * @param {string} cellContent 
 * @param {HTMLTableRowElement} parentRow 
 * @returns {HTMLTableCellElement}
 */
function createTableCell(cellType, cellContent, parentRow){
    const cell = document.createElement(cellType);
    cell.innerText = cellContent;
    parentRow.appendChild(cell);
    return cell;
}


/**
 * @param {HTMLTableElement} table 
 * @param {string[]} headerlist 
 */
function generateHeader(table, headerlist){
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    table.appendChild(thead);
    thead.appendChild(tr);
    for (const header of headerlist) {
        createTableCell("th", header, tr);
    }
}

/**
 * 
 * @param {HTMLFormElement} form 
 * @param {string} id 
 * @param {string} labelText 
 */
function createFormElement(form, id, labelText)
{
    const label = document.createElement("label");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const span = document.createElement("span");
 
    label.htmlFor = id;
    label.innerText = labelText;
    input.id = id;

    div.appendChild(document.createElement("br"));
    div.appendChild(label);
    div.appendChild(document.createElement("br"));
    div.appendChild(input);
    div.appendChild(document.createElement("br"));
    span.classList("error");
    div.appendChild(span);
}

/**
 * 
 * @param {Event} e
 */
function HTMLeventListener(e){
    e.preventDefault();
 
    /**
     * @type {HTMLFormElement}
     */
    const pepino = e.target;
 
    /**
    * @type {HTMLInputElement}
    **/
    const ubiVagyDinnye = pepino.querySelector("#nemzetiseg");

    /**
    * @type {string}
    **/
    const ubiVagyDinnyeValue = ubiVagyDinnye.value;
 
    /**
    * @type {HTMLInputElement}
    **/
    const dinnyeVagyUbi = pepino.querySelector("#szerzo1");

    /**
    * @type {string}
    **/
   const dinnyeVagyUbiValue = dinnyeVagyUbi.value;
 
    /**
    * @type {HTMLInputElement}
    **/
    const zoldVagySarga = pepino.querySelector("#mu1");

    /**
    * @type {string}
    **/
   const zoldVagySargaValue = zoldVagySarga.value;
 
    /**
    * @type {HTMLInputElement}
    **/
    const kerekVagyRud = pepino.querySelector("#szerzo2");

    /**
    * @type {string}
    **/
   const kerekVagyRudValue = kerekVagyRud.value;
 
    /**
    * @type {HTMLInputElement}
    **/
    const idkatp = pepino.querySelector("#mu2");
    
    /**
    * @type {string}
    **/
   const idkatpValue = idkatp.value;
 
   /**
    * @type {CountryWriters}
    */
   const obj = {};
   obj.nemzetiseg = ubiVagyDinnyeValue;
   obj.szerzo1 = dinnyeVagyUbiValue;
   obj.mu1 = zoldVagySargaValue;
   obj.szerzo2 = kerekVagyRudValue;
   obj.mu2 = idkatpValue;
 
   const vlm = document.getElementById("asztal");
   renderTableRow(vlm, obj);
}