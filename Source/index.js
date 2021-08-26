"use strict";

const { default: JestHooks } = require("jest-watcher/build/JestHooks");

// const triggerReader = require('../Source/event');

function transaction() {
  if (triggerReader) {
    itemScan === true;
  }
  false;
}

function itemScan() {
  let activateReader = transaction;
  let prompt = "Insert card, tap card or phone tap";
  if (activateReader) {
    trigger(prompt);
  }
}

function triggerReader() {
  onkeypress(transaction === true);
  return console.log("key was pressed");
}

function cardReady() {
  let cardInserted = paymentSelect;
  if (cardInserted) {
    onclick === true;
  } else {
    itemScan(); // TODO: May need to revise the call stack on this function, this may cause a loop due to the itemScan being called twice
  }
}

function phoneTaped() {
  let phoneTransaction;
  let prompt = "Insert card, tap card or phone tap";
  if(phoneTransaction) {
    paymentSelect() 
    true;
  } else {
    trigger(prompt)
  }
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// NOTE: Card tap or phone tap would need to connect to the cashback

// TODO: Create the conditional payment for when a phone is used
// TODO: Create the conditional payment for when a card is taped

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function paymentSelect() {
  if (cardReady || phoneTaped) {
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
      display(selectOption);
    }
    if (red) {
      // Edge Case to skip cashback
      let debt = "Debt";
      let credit = "Credit";
      let cardType = (debt, credit);
      cardType(selectOption);
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

// TODO refactor the card removal for the phone payment
function cardRemoval () {
  let cardRemoved = displayShow
  let prompt = 'Please remove card'
  let displayShow = ('Thank you for shopping at', + `${storeGenerator}`);
  if(debitCard || creditCard) {
    prompt()
  } 
  onkeypress (cardRemoved);
}