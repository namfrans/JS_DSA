function palindrome(str) {

  str = str.toLowerCase().replace(/[\W_]/g, '');
  let halfString = str.length / 2;
  let j = str.length - 1;
  for(let i = 0; i <= halfString; i++){
      if(str[i] !== str[j]){
        return false;
      }
      j--;
  }
  return true;
}

palindrome("eye");