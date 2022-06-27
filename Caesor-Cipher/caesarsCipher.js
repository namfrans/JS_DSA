function rot13(str) {
  var strArr = str.split("");
  let rot13_obj = {A:"N", B:"O", C:"P", D:"Q", E:"R", F:"S", G:"T", H:"U", I:"V", J:"W", K:"X", L:"Y", M:"Z", N:"A", O:"B", P:"C", Q:"D", R:"E", S:"F", T:"G", U:"H", V:"I", W:"J", X:"K", Y:"L", Z:"M"
    }

  for(let i = 0; i < strArr.length; i++){
    if(rot13_obj[strArr[i]]){
      strArr[i] = rot13_obj[strArr[i]];
    }
  }
  return strArr.join("");
}

rot13("SERR PBQR PNZC");