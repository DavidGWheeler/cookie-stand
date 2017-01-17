'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
console.log(hours);
//constructor builds out a store with a location name and min/max customers per hour.
function CookieStore (locationName, minCust, maxCust, avgPerSale, opHours){
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.opHours = opHours;
  this.hourlyCookiesArray = [];
  this.soldToday = 0;
  this.soldHourly = [];
}

CookieStore.prototype.hourlyCustVolEst = function(){
  return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
};

//calculate the average number of cookies sold per hour and return hourlyCookies
CookieStore.prototype.hourlySoldAvg = function(){

  for (var i = 0; i < this.opHours.length; i++) {
    this.hourlyCookiesArray.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
    // console.log(i + ': = hourlySoldAvg loop');
  }
  return this.hourlyCookiesArray;
};

//Calculate hourly cookies sold and populate hourlyCookies for the object.
CookieStore.prototype.hourlyCookies = function(){
  var runningTotal = 0;
  for (var i = 0; i < this.hourlyCookies.length; i++) {
    runningTotal = this.hourlyCookies[i] + runningTotal;
    // console.log(runningTotal + ': = hourlyCookies sold loop');
  }
  console.log(runningTotal + ': = hourlyCookiesTotal');
  return runningTotal;
};

CookieStore.prototype.dailyCookies = function(){
  var runningDTotal = 0;
  for (var i = 0; i < this.hourlyCookiesArray.length; i++) {
    runningDTotal = this.hourlyCookiesArray[i] + runningDTotal;
    // console.log(runningDxTotal + ': = dailyCookiesTotal sold loop');
  }
  this.soldToday = runningDTotal;
  // console.log(runningDTotal + ': = dailyCookiesTotal');
  return runningDTotal;
};

CookieStore.prototype.totHourlyCookies = function(){
  var runningHourTotal = [];
  //for each store named in the constructorArray.
  for (var i = 0; i < constructorArray.length; i++) {
    console.log(constructorArray[i].locationName + ': = hourlyCookies sold loop');
//calculate the daily totals, by hour.
    for (var j = 0; j < this.hourlyCookiesArray.length; j++) {
      runningHourTotal = constructorArray[i].hourlyCookiesArray[j] + constructorArray[i++].hourlyCookiesArray[j];
      constructorArray[i].soldHourly.push(runningHourTotal);
      console.log(runningHourTotal);
      console.log(constructorArray[i].soldHourly[0] + ' = soldHourly');
    }
  }
  // this.soldHourly = runningHourTotal;
  console.log(runningHourTotal + constructorArray[i]);
  return runningHourTotal;
};

// creates a table using object data
function salesTable(object){
//head column with store names
  var tableEl = document.getElementById('sales-list');
  for(var i = 0; i < object.length; i++){
    var tableRow = document.createElement('tr');
    tableRow.textContent = object[i].locationName;
    console.log(object[i].locationName);
//table data for my rows
    object[i].hourlySoldAvg();
    object[i].dailyCookies();
    object[i].totHourlyCookies();
    // console.log(this.soldHourly);
    for(var j = 0; j < object[i].hourlyCookiesArray.length; j++){
      var tableData = document.createElement('td');
      tableData.textContent = object[i].hourlyCookiesArray[j];
      tableRow.appendChild(tableData);
    }
//totals to the table footer.
    var dailySoldVariable = object[i].soldToday;
    var tableFoot = document.createElement('tfoot');
    tableFoot.textContent = dailySoldVariable;
    tableRow.appendChild(tableFoot);
    tableEl.appendChild(tableRow);
  }
};

//write hours to the top rows
function row1El(){
  var tableEl = document.getElementById('sales-list');
  var tableRow1El = document.createElement('tr');
  var nameLableEl = document.createElement('td');
  nameLableEl.textContent = 'Location Name';
  tableRow1El.appendChild(nameLableEl).className = 'grey-tag';
  for (var i = 0; i < hours.length; i++) {
    var tableRow1Data = document.createElement('td');
    tableRow1Data.textContent = hours[i];
    tableRow1El.appendChild(tableRow1Data).className = 'grey-tag center';
  }
  var storeTotEl = document.createElement('td');
  storeTotEl.textContent = 'Totals';
  tableRow1El.appendChild(storeTotEl).className = 'grey-tag center';
  tableEl.appendChild(tableRow1El);
};


var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
var seaCent = new CookieStore('Seattle Center', 11, 38, 1.7, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
var capHill = new CookieStore('Capitol Hill', 21, 38, 1.7,['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
var alki = new CookieStore('Alki', 21, 38, 1.7,['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);

//takes three params, string function, bool true = bubble.
var newStoreFormEl = document.getElementById('make-store');

newStoreFormEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();
  var locationName = (event.target.locationName.value);
  console.log(locationName);
  var mincustinput = parseInt(event.target.mincustinput.value);
  console.log(mincustinput);
  var maxcustinput = parseInt(event.target.maxcustinput.value);
  console.log(maxcustinput);
  var avgpersale = parseInt(event.target.avgpersale.value);
  console.log(avgpersale);
  var newStore = new CookieStore(locationName, mincustinput, maxcustinput, avgpersale, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],[]);
  console.log(newStore);
  constructorArray.push(newStore);
  console.log(constructorArray);
  salesTable([newStore]);

//to handle old browsers we are setting this to false.  This is default behavior for newer browsers
},false);

//I don't like that this is a global variable. todo: make this a part of a constructor.
var constructorArray = [firstAndPike, seaTacAirport, seaCent, capHill, alki];

row1El();
salesTable(constructorArray);
