// Code your solutions in this file
let names= [['Lisa', 'Kaitlin', 'Jan' ], 'surprise' ];
function writeCards(names, event) {

  for (let i=0; i<names.length; i++){
    names [i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
  }

  return names;
}


function countdown(num){
while (num >= 0) {
    console.log(num--);
}
return num;
}
countdown(10);