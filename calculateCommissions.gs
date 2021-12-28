
/** ELEVATE SALE UPDATE 
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/


function updateElevateSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('Elevate - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .357));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .1));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (affiliateMath == 2800.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (affiliateMath == 1500.00) {
      salesSheet.getRange(currentRow, 18).setValue(3000);
    } else if (affiliateMath == 1100.00) {
      salesSheet.getRange(currentRow,18).setValue(3300);
    } else if (affiliateMath == 2300.00) {
      salesSheet.getRange(currentRow,18).setValue(2300);
    } else if (affiliateMath == 500.00) {
      salesSheet.getRange(currentRow,18).setValue(500);
    }
  salesSheet.getRange(currentRow, 21).setValue('Elevate');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}


/** RISE SALE UPDATE 
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateRiseSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('RISE - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .357));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .05));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (affiliateMath == 2500.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (affiliateMath == 1350.00) {
      salesSheet.getRange(currentRow, 18).setValue(2700);
    } else if (affiliateMath == 1000.00) {
      salesSheet.getRange(currentRow,18).setValue(3000);
    } else if (affiliateMath == 640.00) {
      salesSheet.getRange(currentRow,18).setValue(3200);
    }
  salesSheet.getRange(currentRow,21).setValue('Rise');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}

/** ASCEND SALE UPDATE 
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateAscendSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('ASCEND - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .357));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .1));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (affiliateMath == 2800.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (affiliateMath == 1500.00) {
      salesSheet.getRange(currentRow, 18).setValue(3000);
    } else if (affiliateMath == 1100.00) {
      salesSheet.getRange(currentRow,18).setValue(3300);
    } else if (affiliateMath == 2300.00) {
      salesSheet.getRange(currentRow,18).setValue(2300);
    }
  salesSheet.getRange(currentRow,21).setValue('Ascend');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}

/** BREATHE SALE 
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateBreatheSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('Breathe - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .357));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .1));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (cashCollected == 2500.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (cashCollected == 1350.00) {
      salesSheet.getRange(currentRow, 18).setValue(2700);
    } else if (cashCollected == 1000.00) {
      salesSheet.getRange(currentRow,18).setValue(3000);
    } else if (cashCollected == 640.00) {
      salesSheet.getRange(currentRow,18).setValue(3200);
    }
  salesSheet.getRange(currentRow,21).setValue('Breathe');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}

/** SAF SALE 
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateSAFSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('SAF - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .357));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .2));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (cashCollected == 3200.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (cashCollected == 2100.00) {
      salesSheet.getRange(currentRow, 18).setValue(4200);
    } else if (cashCollected == 1400.00) {
      salesSheet.getRange(currentRow,18).setValue(4200);
    }

  salesSheet.getRange(currentRow,21).setValue('SAF');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}

/** AGENCY TYCOONS SALE 
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateATSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('AT - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .357));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .2));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (cashCollected == 2800.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (cashCollected == 1500.00) {
      salesSheet.getRange(currentRow, 18).setValue(3000);
    } else if (cashCollected == 1100.00) {
      salesSheet.getRange(currentRow,18).setValue(3300);
    } else if (cashCollected == 2300.00) {
      salesSheet.getRange(currentRow,18).setValue(2300);
    } else if (cashCollected == 700.00) {
      salesSheet.getRange(currentRow,18).setValue(3500);
    }
  salesSheet.getRange(currentRow,21).setValue('Agency Tycoons');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}

/** ALPHA SALE 
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateAlphaSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('Alpha - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .357));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .1));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (cashCollected == 2500.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (cashCollected == 1350.00) {
      salesSheet.getRange(currentRow, 18).setValue(2700);
    } else if (cashCollected == 1000.00) {
      salesSheet.getRange(currentRow,18).setValue(3000);
    } else if (cashCollected == 640.00) {
      salesSheet.getRange(currentRow,18).setValue(3200);
    }
  salesSheet.getRange(currentRow,21).setValue('Alpha');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}

/** THE BREAKTHROUGH
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateBreakthroughSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('The Breakthrough Method - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .3230));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .3));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (cashCollected == 8300.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (cashCollected == 2100.00) {
      salesSheet.getRange(currentRow, 18).setValue(8400);
    } 
  salesSheet.getRange(currentRow,21).setValue('Breakthrough');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}


/** CIC SALE 
 * Calculates the affiliate commission, closer commission, sales manager commission, product owner commission
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param checkAffiliate {number} checks the affiliate's name who gets commission for the sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param cashCollected {number} the total cash collected for this particular sale
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateCICSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('Clarity In Crisis - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  const checkAffiliate = salesSheet.getRange(currentRow,5).getValue();
    if (checkAffiliate == "Stephen Poynter") {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .407));
    } else {
     salesSheet.getRange(currentRow,9).setValue(Math.round(affiliateMath * .357));
    }
  salesSheet.getRange(currentRow,10).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,11).setValue(Math.round(affiliateMath * .05));
  salesSheet.getRange(currentRow,12).setValue(Math.round(affiliateMath * .1));
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  const cashCollected = salesSheet.getRange(currentRow,17).setValue(affiliateMath);
    if (cashCollected == 2800.00) {
      salesSheet.getRange(currentRow,18).setValue(affiliateMath);
    } else if (cashCollected == 1500.00) {
      salesSheet.getRange(currentRow, 18).setValue(3000);
    } else if (cashCollected == 1100.00) {
      salesSheet.getRange(currentRow,18).setValue(3300);
    } else if (cashCollected == 2300.00) {
      salesSheet.getRange(currentRow,18).setValue(2300);
    }
  salesSheet.getRange(currentRow,21).setValue('CIC');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,9).getValue() +
  salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,11).getValue() + salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}

/** EDGE SALES 
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fees assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateEdgeSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('Edge - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  
  salesSheet.getRange(currentRow,10).setValue(250);
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  salesSheet.getRange(currentRow,21).setValue('Edge');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,10).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,16).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}


/** ELEVATE AD SALES 
 * Calculates the total profit for each sale by subtracting the commissions, transaction fees, and loan repayments from the original sale amount
 * @param affiliateMath {number} is the amount paid for this sale
 * @param stripeFee {number} the transaction fee for the sale from Stripe
 * @param getValues {array} the total commissions assigned and fees for this particular sale
 * @param salePrice {number} total sum of all commissions and fess assigned for this particular sale
 * @param otherProfit {number} the total profit for this particular sale after all commissions and fees have been distributed
 * @customfunction
*/

function updateAdSale() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const salesSheet = ss.getSheetByName('Elevate Ads - Transactions 2022');
  const currentRow = salesSheet.getLastRow();
  console.log(currentRow);
  const affiliateMath = salesSheet.getRange(currentRow,8).getValue();
  
  salesSheet.getRange(currentRow,12).setValue(500);
  const stripeFee = salesSheet.getRange(currentRow,13).getValue();
  salesSheet.getRange(currentRow,14).setValue(Math.round(affiliateMath * .1));
  salesSheet.getRange(currentRow,15).setValue(affiliateMath - stripeFee);
  salesSheet.getRange(currentRow,16).setValue(affiliateMath * .2);
  salesSheet.getRange(currentRow,20).setValue(affiliateMath * .2);
  salesSheet.getRange(currentRow,21).setValue('Edge');
  
  const getValues = salesSheet.getRange(currentRow,8,1,7).getValues();
  console.log(getValues);
  //	[ [ 1500, 536, 150, 75, 150, 55.65, 150 ] ]

  const salePrice = salesSheet.getRange(currentRow,12).getValue() + salesSheet.getRange(currentRow,13).getValue() + salesSheet.getRange(currentRow,14).getValue() + salesSheet.getRange(currentRow,20).getValue();

  console.log(salePrice);
  const otherProfit = salesSheet.getRange(currentRow,8).getValue() - salePrice;
  console.log(otherProfit);
  salesSheet.getRange(currentRow,19).setValue(otherProfit);
}

