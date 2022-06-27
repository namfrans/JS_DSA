function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  for(let i = 0; i < arr.length; i++){
    let  r = earthRadius + arr[i].avgAlt;
    let T = 2*Math.PI*Math.sqrt(Math.pow(r, 3)/GM);
    arr[i].orbitalPeriod = Math.round(T);
    delete arr[i].avgAlt;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);