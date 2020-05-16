const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','a', 'b', 'c', 'd', 'e'];


const day = new Date().getDate();

//const input= 'saad, clown... doown';
const input= 'goor, qzckb... rcckb';
const key=day;

function FindShiftedIndex(input) {
  return alphabet.indexOf(input)!==-1 ? alphabet.indexOf(input)+day : input;
}

function DeShiftedIndex(input) {
  return alphabet.lastIndexOf(input)!==-1 ? alphabet.lastIndexOf(input)-key : input;
}

function splitIntoArray(input) {
 return input.split('');
}

function getNewLeter(input){
  return alphabet[input]!==undefined ? alphabet[input] : input;
}

var ReturnValue = splitIntoArray(input).map(FindShiftedIndex).map(getNewLeter);

var DecodeReturnValue =splitIntoArray(input).map(DeShiftedIndex).map(getNewLeter);

//console.log('return value: '+ReturnValue.join(''));
//console.log('decoded return value: '+DecodeReturnValue.join(''));
//console.log('FindShiftedIndex: '+FindShiftedIndex(',!'));

 


