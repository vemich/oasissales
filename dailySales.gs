function sendDailyEmail() {
  var dailySalesData = salesForToday();
  var body = getEmailText(dailySalesData);
  //var htmlBody = getEmailHtml(dailySalesData);
  
  MailApp.sendEmail({
    to: "val@theoasis.co", 
    subject: "Daily Sales Update",
    body: body,
    //htmlBody: htmlBody
  });
}

function getEmailText(dailySalesData) {
   var text = "";
   dailySalesData.forEach(function(date) {
   text = text + date.date + "\n" + "$" + date.salePrice + "\n" + date.salesRep + "\n" + "$" + date.salesCommission + "\n-----------------------\n\n";
  });
  return text;

/**
 * @OnlyCurrentDoc
 */

}
function salesForToday() {
  todaysDate = Utilities.formatDate(new Date(),"CDT",'MM-dd-yyyy');
  var ss = SpreadsheetApp.getActive();
  var sheet1 = ss.getSheetByName('OASIS - Transactions 2022').getDataRange();
  var sheet1Data = sheet1.getValues();
  Logger.log(JSON.stringify(sheet1Data));
  /*
 Logging output too large. Truncating output. [["","","","","","","",1485060.98,477181.41,139463.208,68581.80900000001,27773.779800000004,50240.14000000018,377529.0600000024,1425652.759999992,291327.24,1768682,1344818.98,39367.439999999966,5500,"","","","",""],["Transaction Date","Type","Client","Email","Affiliate","Closer","Sales Manager","Sales Amount","Affiliate Payout","Closer Payout","Sales Manager Payout","Product Owner Pay","Stripe Fees","Oasis","Sent from Stripe","Clearbanc","Cash Collected","New Cash","Profit Other","Stripe","","","Affiliate Email","Sheet Name","Work Week"],["2021-01-01T05:00:00.000Z","New","Tristen Archer","tristen.archerr@gmail.com","-","-","-",997,"","",49.85,99.7,29.21,529.11,967.79,189.43,997,997,"","","Alpha - Row3","January","","","12/31 - 01/06"],["2021-01-04T05:00:00.000Z","New","Jacob Queen","jacobdqueen@gmail.com","-","-","-",997,"","",49.85,99.7,29.21,"","","",997,"","","","Alpha - Row4","January","Mleavitt_23@yahoo.com","","12/31 - 01/06"],["2021-03-17T05:00:00.000Z","New","Justin Johnson","justin.johnson821@gmail.com","-","-","-",997,"","","",99.7,29.21,678.66,967.79,189.43,997,997,"","","Alpha - Row5","March","Mikerama94@gmail.com","","03/11 - 03/17"],["2021-05-12T05:00:00.000Z","New","Cyndi Pavone","cynthianardone2@hotmail.com","-","","-",1250,"","","",125,49.05,204.7,1200.95,237.5,"$NA",1250,"","","Alpha - Row6","May","tom.leneve@gmail.com","","05/06 - 05/12"],["2021-05-12T05:00:00.000Z","New","Stephen Poynter","poyntersb@gmail.com","---","","-",1250,"","","",125,49.05,204.7,1200.95,237.5,"$NA",1250,"","","Alpha - Row7","May","tom.leneve@gmail.com","","05/06 - 05/12"],["2021-05-12T05:00:00.000Z","New","Mark Kian Knudsen","markkianknudsen@gmail.com","-","-","-",1250,"","","",125,49.05,204.7,1200.95,237.5,"$NA",1250,"","","Alpha - Row8","May","","","05/06 - 05/12"],["2021-04-28T05:00:00.000Z","New","test","val@theoasis.co","-","Aprelle McCarty","Jake",1,0.37,0.1,0.05,0.3,0.33,-0.35,0.67,0.2,"",1,"","","The Breakthrough Method - Row3","April","","","04/22 - 04/28"],["2021-06-22T05:00:00.000Z","New","Rohan Thomas","rohanmanithomas@gmail.com","-","-","-",1400,"","","",280,54.9,144.2,1345.1,266,"",1400,"","","AT - Row3","June","brett.gonzenbach@gmail.com","","06/17 - 06/23"],["2021-01-04T05:00:00.000Z","New","Jacob Queen","jacobdqueen@gmail.com","-","-","-",997,"","","",99.7,29.21,"","","",997,"","","","Breathe - Row3","January","tobias.meyer4@gmx.net","","12/31 - 01/06"],["2021-02-15T05:00:00.000Z","New","Summer L Lawson","hello@summerlawson.com","-","-","-",997,"","","",99.7,29.21,678.66,967.79,189.43,997,997,"","","Breathe - Row4","February","Mikerama94@gmail.com","","02/11 - 02/17"],["2021-02-16T05:00:00.000Z","New","Josh","Joshheller74@yahoo.com","-","-","-",997,"","","",99.7,29.21,529.11,967.79,189.43,997,997,"","","Breathe - Row5","February","michaelkennedysolutions@gmail.com","","02/11 - 02/17"],["2021-04-23T05:00:00.000Z","New","Shannon Riley","shannon.d.riley92@gmail.com","-","-","-",497,"","","",50,"","","","","$NA","","","","Breathe - Row6","April","Mikerama94@gmail.com","","04/22 - 04/28"],["2021-05-25T05:00:00.000Z","Deposit","Dafne Martinez","dafnemartinez@theoasis.co","-","-","-",500,"","","",50,14.8,115.2,485.2,95,500,500,"","","Breathe - Row7","May","brett.gonzenbach@gmail.com","","05/20 - 05/26"],["2021-06-01T05:00:00.000Z","MRR","Dafne Martinez","dafnemartinez@theoasis.co","-","-","-",750,"","","",75,14.8,115.2,485.2,95,"$NA",500,"","","Breathe - Row8","June","clewisbb89@gmail.com","","05/27 - 06/02"],["2021-02-10T05:00:00.000Z","New","Rohan Thomas","rohanmanithomas@gmail.com","-","-","-",5000,"","","","",195.3,4304.8,4804.8,3891.9,"","","","","Edge -Row3","February","tom.leneve@gmail.com","","02/04 - 02/10"],["2021-02-11T05:00:00.000Z","New","C Bigu","bigusabin@gmail.com","","","",5000,"","","","",195.3,4304.8,4804.8,3891.9,"","","","","Edge -Row4","February","Mikerama94@gmail.com","","02/11 - 02/17"],["2021-02-16T05:00:00.000Z","New","Jackeline Torres","torrespoloc@gmail.com","","","",5000,"","","","",195.3,4304.8,4804.8,3891.9,"","","","","Edge -Row5","February","tom.leneve@gmail.com","","02/11 - 02/17"],["2021-02-22T05:00:00.000Z","New","Heather Fortuna Bush","heather.fortuna@gmail.com","","","",5000,"","","","",195.3,4304.8,4804.8,3891.9,"","","","","Edge -Row6","February","brett.gonzenbach@gmail.com","","02/18 - 02/24"],["2021-10-30T05:00:00.000Z","New","Luke Batten","batten.luke.51@gmail.com","","Aprelle McCarty","",5000,"",250,"","",184.8,500,4815.2,1000,"","",3065.2,"","Edge -Row7","October","brett.gonzenbach@gmail.com","","10/28 - 11/03"],["2021-11-03T05:00:00.000Z","","William Campbell","william.a.l.campbell@gmail.com","","Aprelle McCarty","",5000,"",250,"","",134.8,500,4865.2,1000,"","",3115.2,"","Edge -Row8","November","michaelkennedysolutions@gmail.com","","10/28 - 11/03"],["2021-10-30T05:00:00.000Z","New","Cameron Lewis","clewisbb89@gmail.com","","Aprelle McCarty","",12500,"",1000,"","",336.55,1250,12163.45,2500,"","",7413.45,"","Elite - Row3","October","brett.gonzenbach@gmail.com","","10/28 - 11/03"],["2021-11-19T05:00:00.000Z","New","Alexander Weith","alecw5@msn.com","","Aprelle McCarty","",25000,"",1000,"","",672.5,2500,24327.5,5000,"","",13327.5,5000,"Elite - Row4","November","Mikerama94@gmail.com","","11/18 - 11/24"],["2021-09-27T05:00:00.000Z","New","Frances Margaret Leggett","francesleggett@gmail.com","-","","-",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:3","September","alebeau86@gmail.com","","09/23 - 09/29"],["2021-09-27T05:00:00.000Z","New","Cynthia Pavone","preciousyou.cyndi@gmail.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:4","September","Mleavitt_23@yahoo.com","","09/23 - 09/29"],["2021-09-29T05:00:00.000Z","New","Sebastian Castellanos","sebas_103@icloud.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:5","September","clewisbb89@gmail.com","","09/23 - 09/29"],["2021-09-30T05:00:00.000Z","New","Sidharth Maurya","sidharth131991@gmail.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:6","September","clewisbb89@gmail.com","","09/30 - 10/06"],["2021-10-02T05:00:00.000Z","New","Cameron Lewis","clewisbb89@gmail.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:7","October","tom.leneve@gmail.com","","09/30 - 10/06"],["2021-10-17T05:00:00.000Z","New","Jessica E Stadler","jessicastadler@thesunkissed-traveler.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:8","October","","","10/14 - 10/20"],["2021-10-17T05:00:00.000Z","New","Cameron Lewis","clewisbb89@gmail.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:9","October","tom.leneve@gmail.com","","10/14 - 10/20"],["2021-10-17T05:00:00.000Z","New","Aprelle McCarty","madeamme@hotmail.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:10","October","Mikerama94@gmail.com","","10/14 - 10/20"],["2021-10-17T05:00:00.000Z","New","Ethan Huston","ethanhustonbusiness@gmail.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:11","October","madeamme@hotmail.com","","10/14 - 10/20"],["2021-10-17T05:00:00.000Z","New","Patrick Øvre","patrick@oevre.dk","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:12","October","brett.gonzenbach@gmail.com","","10/14 - 10/20"],["2021-10-18T05:00:00.000Z","New","Sara Mason","studey5@yahoo.com","","","",2500,"","","",500,72.8,659.7,2427.2,500,"","","","","Elevate Ads - Row:13","October","","","10/14 - 10/20"],["2021-11-19T05:00:00.000Z","MRR","Cameron","clewisbb89@gmail.com","","","",2500,"","","",500,71.5,250,2428.5,500,"","",928.5,500,"Elevate Ads - Row:14","November","tom.leneve@gmail.com","","11/18 - 11/24"],["2021-01-04T05:00:00.000Z","MRR","Brianna N Persinger","persingerbrianna@gmail.com","-","Natassa Gelinas","Jake Queen",600,270,60,30,30,17.7,192.3,582.3,"",1200,"","","","RISE - Row:3","January","Mikerama94@gmail.com","","12/31 - 01/06"],["2021-01-05T05:00:00.000Z","Deposit","Saphire Mako","saph237@gmail.com","Matt Pliskin","Natassa Gelinas","Jake Quee
  */

  sheet1Data.shift();
  var dates = [];
  for(var i = 0; i < sheet1Data.length; i++) {
    if(sheet1Data[i].indexOf(sheet1Data) > -1) {
      date.date = value[0];
      date.salePrice = value[6];
      date.salesRep = value[5];
      date.salesCommission = value[8];
      dates.push(date);
  }
  //Logger.log(JSON.stringify(dates));
  //return dates;
  
}}

