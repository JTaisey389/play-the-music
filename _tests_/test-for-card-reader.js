'use strict'

const triggerReader = require('../Source/event');

// Test for Card Reader Activate

xdescribe('Test to see if Card Reader will Activate', () => {
  test('It should activate the card reader', () => {
    expect(triggerReader).tobe(true);
  })
})