'use strict';

//var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

var firstAndPike = {
  locationName: '1st & Pike',
//customer attribuites
  minCust: 23,
  maxCust: 65,
  avgPerSale: 6.3,
//this store's hours of operation
  opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//hourly cookie sales
  hourlyCookies: [],

  hourlyCustVolEst: function() {
    return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  },

  hourlySoldAvg: function() {
    for (var i = 0; i < this.opHours.length; i++) {
      this.hourlyCookies.push(Math.round(this.hourlyCustVolEst() * this.avgPerSale));
      console.log(i + ': = hourlySoldAvg loop');
    }
    // console.log(this.dailyCookies + 'firstAndPike hourlyCookies');
    // console.log(this.hourlyCookies + ': = Cookies Per Hour');
    return this.hourlyCookies;
  },

  dailyCookiesTotal: function(){
    var runningTotal = 0;
    for (var i = 0; i < this.hourlyCookies.length; i++) {
      runningTotal = this.hourlyCookies[i] + runningTotal;
      console.log(runningTotal + ': = dailyCookies sold loop');
    }
    console.log(runningTotal + ': = dailyCookiesTotal');
    return runningTotal;
  },
  tabelEl: function(){
    for (var i = 0; i < this.hourlyCookies.length; i++){
    var rowData = this.hourlyCookies[i];

    var rowEl = document.createElement('tr');

    for (var j = 0; j < rowData.length; j++){
      
    }
  }
};

// for(var i = 0; i < tableData,length; i++){
// 	var rowData = tableData[i];
//
// 	var rowEl = document.createElement('tr');
//
// 	for(var j = 0; j < rowData.length; j++){
// 		var content = rowData[j];
//
// 		var dataEl = document.createElement('td');
// 		dataEl.textContent = content;
// 		rowEl.appendChile(dataEl);
//     }
//
// 	tableEl.appendChild(rowEL);
// }

//get and log my hourlySoldAvg
firstAndPike.hourlySoldAvg();
console.log(firstAndPike.hourlySoldAvg() + ': = hourly sold average for firstAndPike');

//get and log my daily total
firstAndPike.dailyCookiesTotal();
console.log(firstAndPike.dailyCookiesTotal());


// var seaTacAirport = {
//   locationName: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgPerSale: 1.2,
//   opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pmam','8pm'],
//   dailyCookies: [],
//   custVolEst: function() {
//     return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   },
//   hourlySoldAvg: function() {
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.dailyCookies.push(Math.round(this.custVolEst() * this.avgPerSale));
//     }
//     console.log(this.dailyCookies);
//     return this.dailyCookies;
//   }
// };
//
// seaTacAirport.hourlySoldAvg();
// console.log(seaTacAirport.custVolEst());
// console.log(seaTacAirport.hourlySoldAvg());
//
//
// var seaCent = {
//   locationName: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgPerSale: 1.7,
//   opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pmam','8pm'],
//   dailyCookies: [],
//   custVolEst: function() {
//     return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   },
//   hourlySoldAvg: function() {
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.dailyCookies.push(Math.round(this.custVolEst() * this.avgPerSale));
//     }
//     console.log(this.dailyCookies);
//     return this.dailyCookies;
//   }
// };
//
// seaCent.hourlySoldAvg();
// console.log(seaCent.custVolEst());
// console.log(seaCent.hourlySoldAvg());
//
// var capHill = {
//   locationName: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgPerSale: 1.7,
//   opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pmam','8pm'],
//   dailyCookies: [],
//   custVolEst: function() {
//     return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   },
//   hourlySoldAvg: function() {
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.dailyCookies.push(Math.round(this.custVolEst() * this.avgPerSale));
//     }
//     console.log(this.dailyCookies);
//     return this.dailyCookies;
//   }
// };
//
// capHill.hourlySoldAvg();
// console.log(capHill.custVolEst());
// console.log(capHill.hourlySoldAvg());
//
// var alki = {
//   locationName: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgPerSale: 1.7,
//   opHours: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pmam','8pm'],
//   dailyCookies: [],
//   custVolEst: function() {
//     return (Math.round(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   },
//   hourlySoldAvg: function() {
//     for (var i = 0; i < this.opHours.length; i++) {
//       this.dailyCookies.push(Math.round(this.custVolEst() * this.avgPerSale));
//     }
//     console.log(this.dailyCookies);
//     return this.dailyCookies;
//   }
// };
//
// alki.hourlySoldAvg();
// console.log(alki.custVolEst());
// console.log(alki.hourlySoldAvg());
