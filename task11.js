function isVowel(char_v) {
    var character = char_v.toLowerCase();
    switch (character) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
            break;
        default:
            return false;
    }
}   
console.log(isVowel ("a"));
