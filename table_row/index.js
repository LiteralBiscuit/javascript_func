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
 * @type {mindenIs}
 */
const minden = {
    thk: ["Nemzetiség", "Szerző", "Mű"],
    formArr: [
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

}
generateTable(minden.thk, arr);
/**
 * @type {HTMLFormElement}
 **/
const forms = document.getElementById("htmlform");
forms.addEventListener("submit", HTMLeventListener);

const jsform = createForm(minden.formArr, "jsform");
 
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
        renderTableBody(arr);
        jsform.reset();
   }
})