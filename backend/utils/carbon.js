const carbonData = {
  transport: {
    car: 2.5,
    metro: 0.5,
    walking: 0,
    cycling: 0
  },
  food: {
    veg: 1.0,
    nonveg: 2.5
  }
};

function calculateCarbon(type, action) {
  if (carbonData[type] && carbonData[type][action]) {
    return carbonData[type][action];
  }
  return 0;
}

module.exports = calculateCarbon;