'use strict';

//constructor builds out a store with a location name and min/max customers per hour.
function CookieStore (locationName, minCust, maxCust, avgPerSale, opHours){
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.opHours = opHours;
}

CookieStore.prototype.hourlyCustVolEst = function(){
  return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
};

CookieStore.prototype.hourlySoldAvg = function(){
  var hourlyCookies = [];
  for (var i = 0; i < this.opHours.length; i++) {
    hourlyCookies.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
    console.log(i + ': = hourlySoldAvg loop');
  }
  return hourlyCookies;
};

//Calculate hourly cookies sold and populate hourlyCookies for the object.
//Todo: change the name of hourlyCookies
CookieStore.prototype.hourlyCookies = function(){
  var runningTotal = 0;
  for (var i = 0; i < this.hourlyCookies.length; i++) {
    runningTotal = this.hourlyCookies[i] + runningTotal;
    console.log(runningTotal + ': = dailyCookies sold loop');
  }
  console.log(runningTotal + ': = dailyCookiesTotal');
  return runningTotal;
};

// creates a table using object data
function salesTable(object){
  var tableEl = document.getElementById('sales-list');
  for(var i = 0; i < object.length; i++){
    var tableRow = document.createElement('tr');
    tableRow.textContent = object[i].locationName;
    console.log(object.locationName);
    console.log(object);
    console.log();
    var hourlyCookies = object[i].hourlySoldAvg();
    for(var j = 0; j < object[i].hourlySoldAvg().length; j++){
      var tableData = document.createElement('td');
      tableData.textContent = hourlyCookies[j];
      tableRow.appendChild(tableData);
    }
    tableEl.appendChild(tableRow);
  }
}

var firstAndPike = new CookieStore('First and Pike', 23, 65, 6.3, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
var seaTacAirport = new CookieStore('SeaTac Airport', 3, 24, 1.2, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
var seaCent = new CookieStore('Seattle Center', 11, 38, 1.7, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
var capHill = new CookieStore('Capitol Hill', 21, 38, 1.7,['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
var alki = new CookieStore('Alki', 21, 38, 1.7,['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);

//takes three params, string function, bool true = bubble.
var formEl = document.getElementById('make-store');

formEl.addEventListener('submit', function(event){
  event.preventDefault();
  event.stopPropagation();

  renderUsername(event.target.username.value);

//to handle old browsers we are setting this to false.  This is default behavior for newer browsers
},false);

var constructorArray = [firstAndPike, seaTacAirport, seaCent, capHill, alki];

salesTable(constructorArray);

// //Write hourlyCookies sales to the DOM
// CookieStore.prototype.hourlySalesWrite = function() {
//   var todaySold = document.getElementById('sales-list');
//   for (var i = 0; i < this.hourlyCookies.length; i++){
//     var rowEl = document.createElement('li');
//     rowEl.textContent = this.opHours[i] + ': ' + this.hourlyCookies[i] + 'cookies.';
//     todaySold.appendChild(rowEl);
// };
//
// //Write daily cookie sales to the DOM
// CookieStore.prototype.dailySalesWrite = function(){
//   document.createElement('li');
//   dailySalesWrite.textContent = 'Total: ' + this.dailyCookiesTotal();
//   todaySold.appendChild(this.dailySalesWrite);
// };
