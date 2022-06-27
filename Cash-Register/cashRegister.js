function checkCashRegister(price, cash, cid) {
  var currencyUnit = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100};
  
  let changeArr = [];
  let status = "";
  let change = [];
  var totalChange = cash - price;
  totalChange = Math.round(totalChange * 100)/100;
  let totalChangeCopy = totalChange;
  let invalidChange = cash - Math.round(price);
  var cashInDrawer = 0;

  let filter_cid = cid.filter(elem => elem[1] !== 0).reverse();
  filter_cid.forEach(elem => {
          var cashInDrawerBlock = Math.round(elem[1]*100)/100;
          var currency = elem[0];
          cashInDrawer += cashInDrawerBlock;
          var amount = 0;
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\
              while(totalChange >= currencyUnit[currency] && cashInDrawerBlock > 0){
                    cashInDrawerBlock -= currencyUnit[currency];
                    totalChange -= currencyUnit[currency];
                    amount += currencyUnit[currency];
                    //To round of change total change after every iteration.
                    totalChange = Math.round(totalChange*100)/100
              }
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||\\
        if(amount !== 0){
          change.push([elem[0], amount]);
        }
  });
  let getChangeCashValue = change[0]
  if(totalChange > cashInDrawer || getChangeCashValue[1] < totalChange){
          status = "INSUFFICIENT_FUNDS";
          change = [];
        }else if(totalChange == 0 && totalChangeCopy == cashInDrawer){
          status = "CLOSED";
          change = [...cid];
        }else{ 
          status = "OPEN"
        }
   return {"status": status, "change": change};
} 
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));