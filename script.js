// string.split()
// create new array
const textWord = document.getElementById('textWord');

let statements = 'tiger like meats';
const tukar = statements.split(" ");
textWord.innerHTML = tukar;
console.log(tukar);

const state1 = 'nasi goreng cina, nasi ayam, nasi lemak, nasi ambang, nasi kukus';
const tukar2 = state1.split(",");
textWord.textContent = tukar2;
console.log(tukar2)

const state2 = 'muhammad ali bin abu bakar bin haji sulaiman daud bin haji yusuf'
const tukar3 = state2.split(' bin ');
console.log(tukar3);
textWord.textContent = tukar3

const state3 = 'dr muhammad haji yusuf bin haji daud soleh bin haji sulaiman bin haji abu bakar bin haji ali';
const tukar4 = state3.split(' bin ', 3);
console.log(tukar4)
textWord.textContent = tukar4

// array.filter()
// create new array

const array1 = [18, 16, 20, 23, 25, 30, 12, 10];
const filterArray1 = array1.filter(checkAge)
function checkAge(check){
    return check > 18
}
console.log(filterArray1);
textWord.textContent = filterArray1

const array2 = [12,10,15,18,20,23,25,30,35,40];
const filterArray2 = array2.filter(checkAge2)
function checkAge2(age){
    return age < 25
}
console.log(filterArray2)
textWord.innerHTML = filterArray2
