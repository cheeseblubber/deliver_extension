// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Global variable containing the query we'd like to pass to Flickr. In this
 * case, kittens!
 *
 * @type {string}
 */

console.log("IM IN HERE");
// document.getElementsByClassName('click-cash')[0].onclick = function clickCash() {
  // console.log("CMON GUYS");

function generateThreeDigits() {
  return (Math.round(Math.random() * 1000)).toString();
}

function generatePhoneNumber() {
  return "(" + generateThreeDigits() + ") " + generateThreeDigits() + " " + generateThreeDigits()
}


setTimeout(function(){
  document.getElementsByClassName('select-payment-type')[0].children[2].click()
}, 1000 );
