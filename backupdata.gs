/**
 * function to backup the data to a separate Sheet
 */
function backupData() {

  // get name of the Sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const spreadsheetName = ss.getName();

  // determine if backup sheet exists???
  const backupSheets = DriveApp.getFilesByName('Backup of ' + spreadsheetName);

  // check if the backup sheet exists already
  if (backupSheets.hasNext()) {

    // backup sheet exists already, add new data to it
    console.log('Sheet already exists, so let\'s add data to it');

  }
  else {

    // backup sheet does not exist yet
    console.log('No backup Sheet yet, so create one!');

    // create a backup of the Sheet
    const backupSpreadsheet = ss.copy('Backup of ' + spreadsheetName);

  }
  
}
