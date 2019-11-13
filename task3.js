

function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            console.log("Not A Palindrome");
            return false;

        }
   
    }


    return true,console.log("It is Palindrome");;
    
}
var a = new palindrome("tooot");
console.log(a);