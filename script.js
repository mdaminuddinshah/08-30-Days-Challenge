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

