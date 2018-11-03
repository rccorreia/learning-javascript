const PHONE_PRICE = 99.99
const ACCESSORY_PRICE = 9.99
const TAX_RATE = 0.08
const SPENDING_THRESHOLD = 200.00

var calculateTax = amount => amount * TAX_RATE
var formatAmount = amount => '$' + amount.toFixed(2)

var purchasePhones = function() 
{
  let bankAccountBalance = 
    prompt("Please tell how much you have on your bank account: ");
  var amount = 0

  while(amount < bankAccountBalance){
    amount = amount + PHONE_PRICE
    
    if(amount < SPENDING_THRESHOLD){
      amount = amount + ACCESSORY_PRICE
    }
    
  }

  amount = amount + calculateTax(amount)

  console.log("Your purchase: " + formatAmount(amount));

  if (amount > bankAccountBalance) {
    console.log(
    "You can't afford this purchase. :("
    );
  }
}

// This code was tested on the developer console of Chrome