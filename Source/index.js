"use strict";

function triggerReader() {
  MouseEvent.altKey(transactionStart === true);
  return console.log("key was pressed");
}

function transactionStart() {
  //Creating the edge case that ensures that only when the triggerReader function is activated then ItemScan can take place. Otherwise the Mouse Event needs to be activated
  if (triggerReader) {
    itemScan === true;
  }
  false;
}

function itemScan() {
  let prompt = "Insert card, tap card or tap phone";
  prompt();
}

function paymentSort() {
  let cardReady = paymentSelect;
  let phoneTransaction;
  let prompt = "Insert card, tap card or tap phone";
  if (cardReady) {
    MouseEvent.altKey === true;
  } else {
    prompt();
  }
  if (phoneTransaction) {
    paymentSelect();
    true;
  }
}
MouseEvent.altKey(paymentSort);

function paymentSelect() {
  let payOption1 = cardTransaction;
  let payOption2 = phoneTransaction;
  if (payOption1 || payOption2) {
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
    } green.then ((paymentType) => {
      let debit = "Debit";
      let credit = "Credit";
      let cardType = (debit, credit);
      cardType(paymentType);
      if (cardInsert || cardTap || phoneTap == finished) {
        MouseEvent.altKey = debit(debitCard || phonePayment);
        MouseEvent.ctrlKey = credit(creditCard);
      }
    }) 
    if (red) {
      // Edge Case to skip cashback
      let debit = "Debit";
      let credit = "Credit";
      let cardType = (debit, credit);
      cardType();
      if (cardInsert || cardTap || phoneTap == finished) {
        MouseEvent.altKey = debit(debitCard || phonePayment);
        MouseEvent.ctrlKey = credit(creditCard);
      }
    }
  }
}

function debitCard() {
  if (debitTrans) {
    let array = [];
    // array === ['','','',''];
    MouseEvent.altKey(array.push);
    // TODO: Add in a conditional that will evaluate the set pin of the users card and compare it to the pin-pads input
    while (MouseEvent.altKey) {
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

function phonePayment() {
  if (phoneTrans) {
    let array = [];
    // array === ['','','',''];
    MouseEvent.altKey(array.push);
    // TODO: Add in a conditional that will evaluate the set pin of the users card and compare it to the pin-pads input
    while (MouseEvent.altKey) {
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
    let finished = false;
    let signature = "";
    signature.split("");
    if (PointerEvent.pointermove) {
      let padInput = signature;
      let green = "Okay";
      let red = "Clear Signature";
      if (green) {
        padInput();
      }
      if (red) {
        signature();
        if (red == finished) {
          padInput();
        }
      }
    } else {
      signature == !finished;
      let prompt = "Please sign and press okay";
      prompt();
    }
  }
  cardRemoval();
}

function storeGenerator() {
  let storeName = [
    "Trader-Joes",
    "Safeway",
    "Fred-Meyer",
    "QFC",
    "Walmart",
    "Red-Apple",
  ];
  for (let storeName = 0; storeName < 0; storeName++) {
    storeName(Math.random);
  }
  storeName();
}

function cardRemoval() {
  let cardRemoved = readerDisplay;
  let prompt = "Please remove card";
  let readerDisplay = ("Thank you for shopping at", +`${storeGenerator}`);
  if (debitCard || creditCard) {
    prompt();
  }
  MouseEvent.altKey(cardRemoved);
}

function totalKey() {
  if (MouseEvent.ctrlKey) {
    let finished = false;
    if (debitCard() || creditCard() || phonePayment() == !finished) {
      MouseEvent.ctrlKey(totalPressed);
      let totalPressed = delay('1000');
      let audio = new Audio("Assets/58 spring wind chimes crystal sounds.mp3");
      totalPressed(audio);
    }
  }
}
onmousewheel(totalKey);
