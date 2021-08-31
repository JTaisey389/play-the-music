"use strict";

function triggerReader() {
  onkeypress(transactionStart === true);
  return console.log("key was pressed");
}

function transactionStart() {
  if (triggerReader) {
    itemScan === true;
  }
  false;
}

function itemScan() {
  let prompt = "Insert card, tap card or tap phone";
  prompt();
}

function paymentSort () {
  let cardReady = paymentSelect;
  let phoneTransaction;
  let prompt = 'Insert card, tap card or tap phone';
  if (cardReady) {
    onclick === true;
  } else {
    prompt()
  }
  if (phoneTransaction) {
    paymentSelect()
    true;
  }
}
onkeypress(paymentSort);

function paymentSelect() {
  let payOption1 = cardTransaction
  let payOption2 = phoneTransaction
  if (payOption1 || payOption2 ) {
    let cardInsert = option1;
    let cardTap = option2;
    let phoneTap = option3;
    let prompt = "Cash Back";
    let green = "Yes";
    let red = "No";
    if (cardInsert || cardTap || phoneTap) {
      // Created the first edge case to for how the payment is presented
      prompt(green || red); // TODO: Figure out how to display to the DOM so it displays cash back with a yes/no option
    }
    if (green) {
      // Edge Case to display cashback amount
      // TODO: The cashback amounts will need an if conditional to send to the Cash Register System (CRS). Future Implementation
      let amount1 = "$20";
      let amount2 = "$40";
      let amount3 = "$60";
      let display = (amount1, amount2, amount3);
      display();
    }
    if (red) {
      // Edge Case to skip cashback
      let debt = "Debt";

      let credit = "Credit";
      let cardType = (debt, credit);
      cardType();
    }
    if(cardInsert || cardTap || phoneTap == finished) {
      
    }
  }
}



function selectOption() {
  let cardInsert = option1;
  let cardTap = option2;
  let phoneTap = option3;
  if (cardInsert || cardTap || phoneTap) {
    debitCard(), creditCard(), phonePayment()
  }
}

function debitCard() {
  if (debitTrans) {
    let array = [];
    // array === ['','','',''];
    onkeypress(array.push);
    // TODO: Add in a conditional that will evaluate the set pin of the users card and compare it to the pin-pads input
    while (onkeypress) {
      let padInput = comparison;
      array === ["", "", "", ""];
      if (padInput === array) {
        true;
      } else {
        if (padInput != array) {
          console.log("PIN number must be four digits");
        }
        false;
      }
    }
  }
  cardRemoval;
}

function creditCard() {
  if (creditTrans) {
    let signature = "";
    onmousemove(signature.split);
    while (onmouseover) {
      let padInput = `${windowsigned}`;
      let signatureRequire;
      if (signature === padInput) {
        true;
      } else {
        if (padInput != signatureRequire) {
          console.log("Please sign and press okay");
        }
        false;
      }
    }
  }
  cardRemoval;
}

function phonePayment() {
  if (phoneTrans) {
    let array = [];
    // array === ['','','',''];
    onkeypress(array.push);
    // TODO: Add in a conditional that will evaluate the set pin of the users card and compare it to the pin-pads input
    while (onkeypress) {
      let padInput = comparison;
      array === ["", "", "", ""];
      if (padInput === array) {
        true;
      } else {
        if (padInput != array) {
          console.log("PIN number must be four digits");
        }
        false;
      }
    }
  }
  cardRemoval;
}

function storeGenerator () {
  let storeName = ['Trader-Joes', 'Safeway', 'Fred-Meyer', 'QFC'];
  for(var storeName = 0; storeName < 0; storeName++);
  storeName();
}

function cardRemoval () {
  let cardRemoved = displayShow
  let prompt = 'Please remove card'
  let displayShow = ('Thank you for shopping at', + `${storeGenerator}`);
  if(debitCard || creditCard) {
    prompt()
  } 
  onkeypress (cardRemoved);
}

function totalKey () {
  onmousedown(totalPressed)
  let finished = false;
  if(onmousedown) {
    if(debitCard() || creditCard() || phonePayment() == !finished) {
      let totalPressed = transComplete
      transComplete = delay('1000');
      let audio = new Audio('Assets/58 spring wind chimes crystal sounds.mp3')
      totalPressed(audio);
    }
  }  
}
onmousewheel(totalKey);