const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e'];


const day = new Date().getDate();
//const input= 'saad, clown... doown';
//const input= 'goor, qzckb... rcckb';
var input = document.getElementById("inputText").value;

var key;
console.log('input from textarea: ' + input + key);


function FindShiftedIndex(input) {
  return alphabet.indexOf(input) !== -1 ? alphabet.indexOf(input) + day : input;
}

function DeShiftedIndex(input) {
  return alphabet.lastIndexOf(input) !== -1 ? alphabet.lastIndexOf(input) - key : input;
}

function splitIntoArray(input) {
  return input.split('');
}

function getNewLeter(input) {
  return alphabet[input] !== undefined ? alphabet[input] : input;
}

//var ReturnValue = splitIntoArray(input).map(FindShiftedIndex).map(getNewLeter);

var DecodeReturnValue = splitIntoArray(input).map(DeShiftedIndex).map(getNewLeter);

//console.log('return value: '+ReturnValue.join(''));
//console.log('decoded return value: '+DecodeReturnValue.join(''));
//console.log('FindShiftedIndex: '+FindShiftedIndex(',!'));
function getResult() {
  console.log('input: ' + input);
  input = document.getElementById("inputText").value;
  var ReturnValue = splitIntoArray(input).map(FindShiftedIndex).map(getNewLeter);
  document.getElementById("inputText").value = ReturnValue.join('');
  console.log('return value: ' + ReturnValue.join(''))
  
  var copyText = document.getElementById("inputText");
  console.log('copyText: '+copyText);
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}


function getResultDecode() {
  console.log('input: ' + input);
  input = document.getElementById("inputText").value;
  key = document.getElementById("key").value;
  var DecodeReturnValue = splitIntoArray(input).map(DeShiftedIndex).map(getNewLeter);

  document.getElementById("inputText").value = DecodeReturnValue.join('');
  console.log('return value: ' + DecodeReturnValue.join(''));




}