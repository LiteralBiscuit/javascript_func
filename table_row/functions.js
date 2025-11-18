/**
 * @typedef {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2? : string, mu2? : string}} CountryWriters
 * @typedef {{id: string, label: string}} InputForm
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
    tbodyValtozo.innerHTML = "";
 
    for(const obj of array){
        renderTableRow(tbodyValtozo, obj)
    }
}

/**
 * 
 * @param {CountryWriters[]} theadArr 
 * @param {string[]} tbodyArr 
 */
function generateTable(theadArr, tbodyArr){
    const table = document.createElement("table");
    document.body.appendChild(table);
    generateHeader(table, theadArr);
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    tbody.id = "tbody";
    renderTableBody(tbodyArr);
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
 * @param {InputForm[]} arr
 * @param {string} formId
 * @returns {HTMLFormElement}
 */
function createForm(arr, formId)
{
    const form = document.createElement("form");
    const button = document.createElement("button");
    for (const formItem of arr) {
        const div = document.createElement("div");
        const span = document.createElement("span");
        const label = document.createElement("label");
        const input = document.createElement("input");
        const br1 = document.createElement("br");
        const br2 = document.createElement("br");
        const br3 = document.createElement("br");

        label.innerText = formItem.label;

        input.type = "text";
        input.id = formItem.id;
        input.name = formItem.id;

        form.appendChild(div);
        div.appendChild(label);
        div.appendChild(br1);
        div.appendChild(input);
        div.appendChild(br2);
        div.appendChild(br3);
        div.appendChild(span)
        span.classList.add("error");
    }
    button.innerText = "Hozzáadás";
    form.id = formId;
    form.appendChild(button);
    return form;
}

/**
 * 
 * @param {HTMLInputElement} input1 
 * @param {HTMLInputElement} input2 
 * @param {HTMLInputElement} input3 
 */
function formValidator(input1, input2, input3){
    let valid
    const inputArr = [input1, input2, input3];
    for (const element of inputArr) {
        console.log(element)
        if(!element.value){
            element.parentElement.querySelector(".error").innerText = "A mező kitöltése kötelező";
        }
    }
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