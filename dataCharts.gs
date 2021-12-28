function addChart() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Company Totals');
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  const dataRange = sheet.getRange(lastRow -1,lastColumn);

  //get chart data and labels
  const totalChartLabels = sheet.getRange(1,1,lastRow -1,1);
  const totalChartValues = sheet.getRange(1,2,lastRow -1,1);
  
  // create chart
  const totalsChart = sheet.newChart()
    .setChartType(Charts.ChartType.BAR)
    .addRange(totalChartLabels)
    .addRange(totalChartValues)
    .setMergeStrategy(Charts.ChartMergeStrategy.MERGE_COLUMNS)
    .setPosition(16,2,0,0)
    .setNumHeaders(1)
    .setOption('title', 'Oasis Total Revenue By Product 2022')
    .build();

  // insert chart into sheet
  sheet.insertChart(totalsChart);    
}