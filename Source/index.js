'use strict'

// const triggerReader = require('../Source/event');

function transaction () {
  if(triggerReader) {
    itemScan === true;
  } false;
}

function itemScan () {
  let activateReader = transaction;
  let prompt = 'Please insert or tap card'
  if(activateReader) {
    trigger(prompt)
  }
}

function triggerReader () {
  onkeypress(transaction) === true;
  return console.log('key was pressed');
}

function cardInsert () {
  let cardInserted = paymentSelect;
  if(cardInserted) {
    onclick === true;
  } false;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// NOTE: Card tap or phone tap would need to connect to the cashback

// TODO: Create the conditional payment for when a phone is used
// TODO: Create the conditional payment for when a card is taped

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
function paymentSelect () {
  let cardInsert = option1
  let cardTap = option2
  let phoneTap = option3
  let prompt = 'Cash Back';
  let green = 'Yes'
  let red = 'No'
  if(cardInsert || cardTap || phoneTap) { // Created the first edge case to for how the payment is presented
    prompt(green || red) // TODO: Figure out how to display to the DOM so it displays cash back with a yes/no option
  }
  if(green) { // Edge Case to display cashback amount
    // TODO: The cashback amounts will need an if conditional to send to the Cash Register System (CRS)
    let amount1 = '$20';
    let amount2 = '$40';
    let amount3 = '$60';
    let display = (amount1, amount2, amount3)
    display();
  }
  if(red) { // Edge Case to skip cashback
    let debt = 'Debt';
    let credit = 'Credit';
    let cardType = (debt, credit)
    cardType();
  }
}


