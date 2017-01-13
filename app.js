'use strict';

//constructor builds out a store with a location name and min/max customers per hour.
function CookieStore (locationName, minCust, maxCust, avgPerSale, opHours, sold){
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerSale = avgPerSale;
  this.opHours = opHours;
  this.sold = sold;
}

CookieStore.prototype.hourlyCustVolEst = function(){
  return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
};

//calculate the average number of cookies sold per hour and return hourlyCookies
CookieStore.prototype.hourlySoldAvg = function(){
  var hourlyCookies = [];
  for (var i = 0; i < this.opHours.length; i++) {
    hourlyCookies.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
    // console.log(i + ': = hourlySoldAvg loop');
  }
  return hourlyCookies;
};

//Calculate hourly cookies sold and populate hourlyCookies for the object.
//Todo: change the name of hourlyCookies
CookieStore.prototype.hourlyCookies = function(){
  var runningTotal = 0;
  for (var i = 0; i < this.hourlyCookies.length; i++) {
    runningTotal = this.hourlyCookies[i] + runningTotal;
    // console.log(runningTotal + ': = hourlyCookies sold loop');
  }
  // console.log(runningTotal + ': = hourlyCookiesTotal');
  return runningTotal;
};

CookieStore.prototype.dailyCookies = function(){
  var runningDTotal = 0;
  for (var i = 0; i < this.hourlyCookies.length; i++) {
    runningDTotal = this.hourlyCookies[i] + runningDTotal;
    console.log(runningDTotal + ': = dailyCookiesTotal sold loop');
  }
  console.log(runningDTotal + ': = dailyCookiesTotal');
  return runningDTotal;
};

// creates a table using object data
function salesTable(object){
  var tableEl = document.getElementById('sales-list');
  for(var i = 0; i < object.length; i++){
    var tableRow = document.createElement('tr');
    tableRow.textContent = object[i].locationName;
    console.log(object[i].locationName);
    console.log(object);

    var hourlyCookies = object[i].hourlySoldAvg();
    for(var j = 0; j < object[i].hourlySoldAvg().length; j++){
      var tableData = document.createElement('td');
      tableData.textContent = hourlyCookies[j];
      tableRow.appendChild(tableData);

      var dailyCookies = object[i].dailyCookies();
      for (var k = 0; k < obect[i].dailyCookies().length; i++) {
        var tableFoot = document.createElement('tfoot');
        tableFoot.textContent = dailyCookies[k];
        tableRow.appendChild(tableFoot);
      }
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
  var newStore = new CookieStore(locationName, mincustinput, maxcustinput, avgpersale, ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm']);
  console.log(newStore);
  constructorArray.push(newStore);
  console.log(constructorArray);
  salesTable([newStore]);

//to handle old browsers we are setting this to false.  This is default behavior for newer browsers
},false);

//I don't like that this is a global variable. todo: make this a part of a constructor.
var constructorArray = [firstAndPike, seaTacAirport, seaCent, capHill, alki];

//global function  Do I want it to be?
salesTable(constructorArray);
