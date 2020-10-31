function doGet() {
  return HtmlService.createTemplateFromFile("index").evaluate();
}
function test(){
  var sheet = SpreadsheetApp.getActiveSheet();
}
function doGet() {
  const htmlOutput = HtmlService.createTemplateFromFile("index").evaluate();
  return htmlOutput;
}