'use strict';

var opHours = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

var firstAndPike = {
  locationName: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  avgPerSale: 6.3,
  custVolEst: function getRandom() {
    return (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
  for (var i = 0; i < opHours.length; i++) {
    var hourlyAvg = ();
    var dailyAvg = ();
    console.log(i);
    return hourlyAvg();
    console.log(hourlyAvg);
    return dailyAvg();
    console.log(dailyAvg);
  }
};

var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerSale: 1.2,
  custVolEst: function getRandom() {
    return (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var seaCent = {
  locationName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerSale: 1.7,
  custVolEst: function getRandom() {
    return (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var capHill = {
  locationName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerSale: 2.3,
  custVolEst: function getRandom() {
    return (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};

var alki = {
  locationName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgPerSale: 4.6,
  custVolEst: function getRandom() {
    return (Math.random() * (this.maxCust - this.minCust) + this.minCust);
  }
};
