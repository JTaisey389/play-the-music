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
  // Creating the edge case the triggers the paymentSelect function. In this edge case if the payment has not presented the else statement triggers the prompt. The prompt will be displayed on the card reader screen until the Mouse Event is activated. 
  if (cardReady) {
    MouseEvent.altKey === true;
  } else {
    prompt();
  }
  //The trailing edge case is activated and this was added in to ensure that when a phone is taped the reader recognizes the event.
  if (phoneTransaction) {
    paymentSelect();
    true;
  }
}
MouseEvent.altKey(paymentSort);

function paymentSelect() {
  let payOption1 = cardTransaction;
  let payOption2 = phoneTransaction;
  // In this edge case the two types of payment are compiled into a conditional that will trigger a set of additional edge cases within the call stack. The main purpose of this edge case is to contain the other edge cases.
  if (payOption1 || payOption2) {
    let cardInsert = option1;
    let cardTap = option2;
    let phoneTap = option3;
    let prompt = "Cash Back";
    let green = "Yes";
    let red = "No";

    if (cardInsert || cardTap || phoneTap) {
      //Now that we have the conditions set for the edge case the next step is to evaluate depending on if a card is Inserted, Tapped or phone tapped. Once the payment has been presented the prompt will bring up the cash back options on the Card reader
      prompt(green || red)
    }
    // This edge case is constructed to present the user with the amounts of cash back, this will in future implementation send that data back to the CRS.
    if (green) { 
      // TODO: The cashback amounts will need an if conditional to send to the Cash Register System (CRS). Future Implementation
      let amount1 = "$20";
      let amount2 = "$40";
      let amount3 = "$60";
      let display = (amount1, amount2, amount3);
      display();
    } green.then ((paymentType) => { // Within the edge case is a .then to trigger an additional function for either debit or credit card. 
      let debit = "Debit";
      let credit = "Credit";
      let cardType = (debit, credit);
      let finished = true;
      cardType(paymentType);
      // After displaying the two card options the edge case is created that checks to make sure that the payment type has been presented. This is done with a boolean where if the transaction is finished it is true
      if (cardInsert || cardTap || phoneTap == finished) {
        MouseEvent.altKey = debit(debitCard || phonePayment);
        MouseEvent.ctrlKey = credit(creditCard);
      }
    }) 
    if (red) {
      // Edge Case to skip the cash back option and prompts right into checking if the the payment type has been presented
      let debit = "Debit";
      let credit = "Credit";
      let cardType = (debit, credit);
      let finished = true;
      cardType();
      // Just as with the conditional for cash back this operates in the same fashion and evaluates to see if the payment has been presented. Depending on the card type that is selected that will activate the coordinating function
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
