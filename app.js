'use strict';

var opHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pmam','8pm'];

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
      this.dailyCookies.push(Math.floor(this.custVolEst() * this.avgPerSale));
    }
    console.log(this.dailyCookies);
    return this.dailyCookies;
  }
};

firstAndPike.hourlySoldAvg();
console.log(firstAndPike.custVolEst());
console.log(firstAndPike.hourlySoldAvg());

var seaTacAirport = {
  locationName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerSale: 1.2,
  dailyCookies: [],
  custVolEst: function() {
    return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  },
  hourlySoldAvg: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.dailyCookies.push(Math.floor(this.custVolEst() * this.avgPerSale));
    }
    console.log(this.dailyCookies);
    return this.dailyCookies;
  }
};

seaTacAirport.hourlySoldAvg();
console.log(seaTacAirport.custVolEst());
console.log(seaTacAirport.dailyCookies());


var seaCent = {
  locationName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerSale: 1.7,
  dailyCookies: [],
  custVolEst: function() {
    return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  },
  hourlySoldAvg: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.dailyCookies.push(Math.floor(this.custVolEst() * this.avgPerSale));
    }
    console.log(this.dailyCookies);
    return this.dailyCookies;
  }
};

seaCent.hourlySoldAvg();
console.log(seaCent.custVolEst());
console.log(seaCent.dailyCookies());

var capHill = {
  locationName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  dailyCookies: [],
  custVolEst: function() {
    return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  },
  hourlySoldAvg: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.dailyCookies.push(Math.floor(this.custVolEst() * this.avgPerSale));
    }
    console.log(this.dailyCookies);
    return this.dailyCookies;
  }
};

capHill.hourlySoldAvg();
console.log(capHill.custVolEst());
console.log(capHill.dailyCookies());

var alki = {
  locationName: 'Alki',
  minCust: 2,
  maxCust: 16,
  dailyCookies: [],
  custVolEst: function() {
    return (Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  },
  hourlySoldAvg: function() {
    for (var i = 0; i < opHours.length; i++) {
      this.dailyCookies.push(Math.floor(this.custVolEst() * this.avgPerSale));
    }
    console.log(this.dailyCookies);
    return this.dailyCookies;
  }
};

alki.hourlySoldAvg();
console.log(alki.custVolEst());
console.log(alki.dailyCookies());
