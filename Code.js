/**
 * Google Apps Script のメイン関数
 * このファイルに GAS のコードを記述します
 */

function main() {
  console.log('Hello, Google Apps Script!');
  
  // スプレッドシートの例
  const sheet = SpreadsheetApp.getActiveSheet();
  const date = new Date();
  sheet.getRange('A1').setValue('Last updated: ' + date.toString());
  
  return 'Script executed successfully';
}

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu')
    .addItem('Run Main Function', 'main')
    .addToUi();
}

function doGet(e) {
  return HtmlService.createHtmlOutput('Hello from GAS Web App!');
}

function testFunction() {
  console.log('This is a test function');
  return 'Test completed';
}
