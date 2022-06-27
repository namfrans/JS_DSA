function telephoneCheck(str) {
  
  var regexp7 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/
  var regexp8 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/
  let allowed = [regexp7, regexp8];
  //To test the string 
  const regexTest = (regex) => regex.test(str);

  //Checks if the string passes one of the regexes in the array allowed
    if(allowed.some(regexTest)){
        return true;
    }else{
        return false;
    }
}

telephoneCheck("(555)555-5555");