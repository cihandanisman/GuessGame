// let number = parseFloat(prompt("Enter a number between 0-100:"));
let remaining = 3 ;
// const value = Math.floor(Math.random() * 100) + 1

while (remaining > 0) {
    let number = parseFloat(prompt("Enter a number between 0-100:"));

    if (number <= 0 || number >= 100) {
        alert("Please enter a valid number");
        remaining--;
        continue;
    }
    const value = Math.floor(Math.random() * 100) + 1

    if (number == value ) {
        alert("You Won!!!");
        break;
  
    }   else {
        alert(`Try Again!!! you have: '${remaining--}' left!!`);
        
    }

    if ( remaining === 0 ) {
        alert(`Unfortunately you are out of limit!! The number was '${value}'`)
    }
    
}