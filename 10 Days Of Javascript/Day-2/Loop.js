/**
 * Loop
 */

const vowel = ["a", "e", "i", "o", "u"];

function vowelsAndConsonants(s) {
    let vowelArray = [];
    let consonantsArray = [];

    for (let i = 0; i < s.length; i++) {
        if (vowel.indexOf(s[i]) > -1) {
            vowelArray.push(s[i]);
        }
        else {
            consonantsArray.push(s[i]);
        }
    }
    for (let i = 0; i < vowelArray.length; i++) {
        console.log(vowelArray[i]);
    }
    for (let i = 0; i < consonantsArray.length; i++) {
        console.log(consonantsArray[i]);
    }
}
vowelsAndConsonants("javascriptloops");


##############################################################################################################################
SECOND SOLUTION :- 
   
function vowelsAndConsonants(s) {
    var vowels = 'a e i o u'
    var i;
    for(i =0; i<=s.length-1;i++){
        if (vowels.indexOf(s.charAt(i)) != -1){
            console.log(s.charAt(i))
        }
    }
    for (i=0; i<=s.length-1; i++){
        if (vowels.indexOf(s.charAt(i)) == -1){
            console.log(s.charAt(i))
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
