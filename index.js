function produceDrivingRange (range) {
  return function (start, finish) {
    let distance = Math.abs(parseInt(finish)- parseInt(start));
    if ( distance > range) {
      return  `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  }
};

function produceTipCalculator(percent) {
  return function bill (amount){
    return amount * percent;
  }
};

function createDriver(name) {
  let id = 0;
  return class Driver {
    constructor(name) {
      this.id = ++id;
      this.name = name;
    }
  }
};
