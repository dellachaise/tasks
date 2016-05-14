//Поскольку первое решение без использования break or continue этот вариант работает также как и тот что выше, только в нем используется break

var arr = ["white", "yellow", "green", "blue", "purple", "pink", "red", "black", "brown", "grey", "orange"],
		color = arr[randomInteger(0, 12)],
    counter = 0,
    inputColor,
    MAX_TRY = 5,
    attempt;


function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		rand = Math.floor(rand);
		return rand;
}
  
  do {
    attempt = MAX_TRY - counter;
  	inputColor = prompt("Enter the color, please. " + "You have "+ attempt +  " attempts.");
       if (inputColor===color) {
      	break;
      }
    counter++;
  } while (counter != MAX_TRY );
  
  
  
  if(inputColor === color) {
      	alert("You are win!");
    } else {
      	alert("You lose!");
    }