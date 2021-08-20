'use strict'

function itemScan () {
  let activateReader = transaction;
  let prompt = 'Please insert or tap card'
  if(activateReader) {
    trigger(prompt)
  }
}

function transaction () {
  if(transactionOccurs) {
    itemScan === true;
  } else 
  false;
}

module.exports = transaction;