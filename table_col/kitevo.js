console.log("POV: Mát");
/**
 * @type {string}
 */
const a = "Hitler";
console.log(a);
const b = ["a", "b", "c"];
console.log(b[1]);
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
}
for (const x of b) {
    console.log(x);
}
for (const key in b) {
    console.log(b[key]);
}
for (const key in b){
    console.log(`${b[key]}`)
}
/**
 * @type {{name : string, age : number}}
 */
const y = {
    name : "Feri",
    age : 69
}
for (const key in y){
    console.log(y[key])
}