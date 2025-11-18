/**
 * @typedef {{nemzetiseg : string, szerzo1 : string, mu1 : string, szerzo2? : string, mu2? : string}} CountryWriters
 * @typedef {{id: string, label: string}} InputForm
 * @typedef {{thk : string[], formArr: InputForm[]}} mindenIs
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
        div.appendChild(span);
        div.appendChild(br2);
        div.appendChild(br3);
        span.classList.add("error");
    }
    button.innerText = "Hozzáadás";
    form.id = formId;
    form.appendChild(button);
    return form;
}

/**
 * 
 * @param {HTMLInputElement} input
 * @param {string} message
 */
function validateField(input, message){
    let Isvalid = true
    if(!input.value){
        input.parentElement.querySelector(".error").innerText = message;
        Isvalid = false;
    }
    return Isvalid;
}

/**
 * 
 * @param {HTMLInputElement} input1 
 * @param {HTMLInputElement} input2 
 * @param {HTMLInputElement} input3 
 * @returns {bool}
 */
function validateFields(input1, input2, input3){
    let Isvalid = true;
    let lst = document.getElementById("jsform").querySelectorAll(".error");
    for (const item of lst) {
        item.innerText = "";
    }
    let inputs = [input1, input2, input3];
    for (const input of inputs) {
        if(!validateField(input, "A mező kitöltése kötelező!")){
            Isvalid = false;
        }
    }
    return Isvalid;
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
    const nemzetiseg = pepino.querySelector("#nemzetiseg");
    /**
    * @type {string}
    **/
 
    /**
    * @type {HTMLInputElement}
    **/
    const szerzo1 = pepino.querySelector("#szerzo1");
 
    /**
    * @type {HTMLInputElement}
    **/
    const mu1 = pepino.querySelector("#mu1");
    /**
    * @type {string}
    **/
 
    /**
    * @type {HTMLInputElement}
    **/
    const szerzo2 = pepino.querySelector("#szerzo2");
    /**
    * @type {string}
    **/
 
    /**
    * @type {HTMLInputElement}
    **/
    const mu2 = pepino.querySelector("#mu2");
    /**
    * @type {string}
    **/

   if (validateFields(nemzetiseg, szerzo1, mu1)){  
        /**
         * @type {string}
         */
        const nemzetisegValue = nemzetiseg.value;
        
        /**
         * @type {string}
         */
        const szerzo1Value = szerzo1.value;

        /**
         * @type {string}
         */
        const mu1Value = mu1.value;

        /**
         * @type {string}
         */
        const szerzo2Value = szerzo2.value;

        /**
         * @type {string}
         */
        const mu2Value = mu2.value;
        /**
        * @type {CountryWriters}
        */
        const obj = {};
        obj.nemzetiseg = nemzetisegValue;
        obj.szerzo1 = szerzo1Value;
        obj.mu1 = mu1Value;
        obj.szerzo2 = szerzo2Value !== "" ? szerzo2Value : undefined;
        obj.mu2 = mu2Value !== "" ? mu2Value : undefined;
        arr.push(obj);
        console.log(arr);
        const vlm = document.getElementById("asztal");
        renderTableRow(vlm, obj);
        forms.reset();
   }
}