//Variables hoisting

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Sergio';
let job = 'coder';
const year = 1990;

//functions hoisting
console.log(addDecl(2,3));
// console.log(addExpor(2,3));
// console.log(addArrow(2,3));

function addDecl(a,b){
    return a+b;
}

const addExpor = function(a,b){
    return a+b;
};

var addArrow = (a,b) => a + b;
