function convertToRoman(num) {
  //Object of numbers with their corresponding roman numerals to make reference to it when looking for the match of the detected number given in it's place value. 
  let numerals = {1:"i",2:"ii", 3:"iii", 4:"iv", 5:"v", 6:"vi", 7:"vii", 8:"viii", 9:"ix", 10:"x", 20:"xx", 30:"xxx", 40:"xl", 50:"l", 60:"lx", 70:"lxx", 80:"lxxx", 90:"xc", 100:"c", 200:"cc",300:"ccc", 400:"cd", 500:"d", 600:"dc", 700:"dcc", 800:"dccc", 900:"cm", 1000:"m", 2000:"mm", 3000:"mmm", 4000:"mv-", 5000:"v-", 6000:"v-m", 7000:"v-mm", 8000:"v-mmm", 9000:"mx-", 10000:"x-", 20000:"x-x-", 30000:"x-x-x-", 40000:"x-l-", 50000:"l-", 60000:"l-x-", 70000:"l-x-x-", 80000:"l-x-x-x-", 90000:"x-c-", 100000:"c-", 200000:"c-c-", 300000:"c-c-c-", 400000:"c-d-", 500000:"d-", 600000:"d-c-", 700000:"d-c-c-", 800000:"d-c-c-c-", 900000:"c-m-", 1000000:"m-"}

//Converts number to an array of strings which we are going to loop through
var numStr = num.toString().split("");

// To store roman numerals
var romanValue = [];

for(let i = 0; i < numStr.length; i++){
  // The line below finds the place value numbers and used to check for the matching key in the numerals object
    var placeValueCheck = parseInt(numStr[i])*Math.pow(10,numStr.length-i-1);
    if(numerals[placeValueCheck]){
      romanValue.push(numerals[placeValueCheck]);
    }
}
 return romanValue.join("").toUpperCase();
}

convertToRoman(200);


  