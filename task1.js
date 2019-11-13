var inp = parseInt(prompt("Enter the number to make a factorial"));

function fac(inp){

    
        if(inp <= 2) {
        return inp
        }
         else {
         return inp * fac(inp -1);
         }
}

var facc = new fac(inp);
console.log(fac(inp));
