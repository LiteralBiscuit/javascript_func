const form = document.createElement("form");
//mat
/**
 * creates a label and input pair by the parameters below and appends them to parent form
 * @param {string} id name for label and input
 * @param {string} text inner text of label 
 * @param {string} type input datatype
 * @param {HTMLFormElement} parent parent form
 */
function CreateInput(id, text, type="text", parent=form){
    //linebreaks
    const br1 = document.createElement("br");
    const br2 = document.createElement("br");
    const br3 = document.createElement("br");

    //label
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText = text;
    
    //input
    const input = document.createElement("input");
    input.setAttribute("type", type)
    input.setAttribute("id", id)
    input.setAttribute("name", id)

    //append
    parent.appendChild(label);
    parent.appendChild(br1);
    parent.appendChild(input);
    parent.appendChild(br2);
    parent.appendChild(br3)
}

CreateInput("kolto_nev", "Költő neve:")
CreateInput("korszak", "Korszak:")
CreateInput("szerelem1", "Szerelme")
CreateInput("szerelem2", "Szerelme:")

const button = document.createElement("button");
button.innerText = "Hozzáadás";
form.appendChild(button);
document.body.appendChild(form);