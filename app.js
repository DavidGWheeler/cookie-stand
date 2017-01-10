'use strict';

var opHours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var firstAndPike = {
  locationName: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgPerSale: 6.3,
  dailyCookies: [],
  custVolEst: function() {
    return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  },
  hourlySoldAvg: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.dailyCookies.push(this.custVolEst() * this.avgPerSale);
    }
    console.log(this.dailyCookies);
    return this.dailyCookies;
  }
};

firstAndPike.hourlySoldAvg();
//console.log(firstAndPike.custVolEst());
//console.log(firstAndPike.hourlySoldAvg());

// var seaTacAirport = {
//   locationName: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgPerSale: 1.2,
//   custVolEst: function() {
//     return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   }
// };
//
// var seaCent = {
//   locationName: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgPerSale: 1.7,
//   custVolEst: function() {
//     return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   }
// };
//
// var capHill = {
//   locationName: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgPerSale: 2.3,
//   custVolEst: function() {
//     return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
//   }
// };
//
// var alki = {
//   locationName: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgPerSale: 4.6,
//   custVolEst: function() {
//     return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
