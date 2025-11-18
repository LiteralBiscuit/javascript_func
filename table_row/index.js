/**
 * @type {CountryWriters[]}
 */
const arr = [
    {
        nemzetiseg: 'Orosz',
        szerzo1: 'Gogol',
        mu1: 'A köpönyeg',
        szerzo2: 'Csehov',
        mu2: 'A csinovnyik halála'
    },
    {
        nemzetiseg: 'Cseh',
        szerzo1: 'Franz Kafka',
        mu1: 'Az átváltozás'
    },
    {
        nemzetiseg: 'Magyar',
        szerzo1: 'Örkény István',
        mu1: 'Egyperces Novellák',
        szerzo2: 'József Attila',
        mu2: 'Klárisok'
    },
    {
        nemzetiseg: 'Svájc',
        szerzo1: 'Friedrich Dürrenmatt',
        mu1: 'A fizikusok'
    }
]

/**
 * @type {{id: string, label: string}[]}
 */
const formArr = [
    {
        id : "nemzetiseg",
        label : "Nemzetiség:"
    },
    {
        id : "szerzo1",
        label : "Szerző neve:"
    },
    {
        id : "mu1",
        label : "Mű:"
    },
    {
        id : "szerzo2",
        label : "Másik szerző neve:"
    },
    {
        id : "mu2",
        label : "Mű:"
    }
]
/**
 * @type {string[]}
 */
const thk = ["Nemzetiség", "Szerző", "Mű"];

generateTable(thk, arr);
/**
 * @type {HTMLFormElement}
 **/
const forms = document.getElementById("htmlform");
forms.addEventListener("submit", HTMLeventListener);

const jsform = createForm(formArr, "form");
 
document.body.appendChild(jsform);
 
jsform.addEventListener("submit", function (e)
{
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
    const nemzetisegValue = nemzetiseg.value;
 
    /**
    * @type {HTMLInputElement}
    **/
    const szerzo1 = pepino.querySelector("#szerzo1");
    /**
    * @type {string}
    **/
   const szerzo1Value = szerzo1.value;
 
    /**
    * @type {HTMLInputElement}
    **/
    const mu1 = pepino.querySelector("#mu1");
    /**
    * @type {string}
    **/
   const mu1Value = mu1.value;
 
    /**
    * @type {HTMLInputElement}
    **/
    const szerzo2 = pepino.querySelector("#szerzo2");
    /**
    * @type {string}
    **/
   const szerzo2Value = szerzo2.value;
 
    /**
    * @type {HTMLInputElement}
    **/
    const mu2 = pepino.querySelector("#mu2");
    /**
    * @type {string}
    **/
   const mu2value = mu2.value;
 
   /**
    * @type {CountryWriters}
    */
   const obj = {};
   nemzetisegValue == "" ? obj.nemzetiseg = undefined :  obj.nemzetiseg = nemzetisegValue;
   szerzo1Value == "" ? obj.szerzo1 = undefined : obj.szerzo1 = szerzo1Value;
   mu1Value == "" ? obj.mu1 = undefined : obj.mu1 = mu1Value;
   szerzo2Value == "" ? obj.szerzo2 = undefined : obj.szerzo2 = szerzo2Value;
   mu2 == "" ? obj.mu2 = undefined : obj.mu2 = mu2value;


   formValidator(nemzetiseg, szerzo1, mu1)

 
   arr.push(obj);
   console.log(arr);
   renderTableBody(arr);
})