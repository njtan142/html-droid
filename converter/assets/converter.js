const SELECTIONS = {
  // universal value is 1cm for length-related units
  length: {
    meters: {
      unit: "m",
      name: "Meters",
      conversion: 1 * 100, // 100cm
    },
    centimeters: {
      unit: "cm",
      name: "Centimeters",
      conversion: 1, // 1cm
    },
    millimeters: {
      unit: "mm",
      name: "Millimeters",
      conversion: 1 / 10, // 0.1cm
    },
    kilometers: {
      unit: "km",
      name: "Kilometers",
      conversion: 100 * 1000, // 100000cm
    },
    feet: {
      unit: "ft",
      name: "Feet",
      conversion: 2.54 * 12, // 30.48cm
    },
    inches: {
      unit: "in",
      name: "Inches",
      conversion: 2.54, // 2.54cm
    },
    yards: {
      unit: "yd",
      name: "Yards",
      conversion: 2.54 * 36, // 91.44cm
    },
    miles: {
      unit: "mi",
      name: "Miles",
      conversion: 2.54 * 63360, // 160934.4cm
    },
    nauticalmiles: {
      unit: "nmi",
      name: "Nautical Miles",
      conversion: 2.54 * 72910, // 185318.6cm
    },
    micrometers: {
      unit: "µm",
      name: "Micrometers",
      conversion: 1 / 10000, // 0.0001cm
    },
    nanometers: {
      unit: "nm",
      name: "Nanometers",
      conversion: 1 / 10000000, // 0.0000001cm
    },
    lightyears: {
      unit: "ly",
      name: "Light Years",
      conversion: 9.4607e17 * 100, // 9.4607e17cm
    },
    astronomicalunits: {
      unit: "AU",
      name: "Astronomical Units",
      conversion: 1.496e13 * 100, // 1.496e13cm
    },
    parsecs: {
      unit: "pc",
      name: "Parsecs",
      conversion: 3.0857e18 * 100, // 3.0857e18cm
    },
  },
  weight: {
    kilograms: {
      unit: "kg",
      name: "Kilograms",
      conversion: 1000, // 1000g
    },
    grams: {
      unit: "g",
      name: "Grams",
      conversion: 1, // 1g
    },
    milligrams: {
      unit: "mg",
      name: "Milligrams",
      conversion: 1 / 1000, // 0.001g
    },
    micrograms: {
      unit: "µg",
      name: "Micrograms",
      conversion: 1 / 1000000, // 0.000001g
    },
    metrictons: {
      unit: "t",
      name: "Metric Tons",
      conversion: 1000000, // 1000000g
    },
    pounds: {
      unit: "lb",
      name: "Pounds",
      conversion: 453.59237, // 453.59237g
    },
    ounces: {
      unit: "oz",
      name: "Ounces",
      conversion: 28.3495231, // 28.3495231g
    },
    stones: {
      unit: "st",
      name: "Stones",
      conversion: 453.59237 * 14, // 6350.29318g
    },
    shorttons: {
      unit: "ton",
      name: "Short Tons",
      conversion: 907184.74, // 907184.74g
    },
  },
  volume: {
    liters: {
      unit: "L",
      name: "Liters",
      conversion: 1000, // 1000mL
    },
    milliliters: {
      unit: "mL",
      name: "Milliliters",
      conversion: 1, // 1mL
    },
    cubicmeters: {
      unit: "m³",
      name: "Cubic Meters",
      conversion: 1000 * 1000, // 1000000mL
    },
    gallons: {
      unit: "gal",
      name: "Gallons",
      conversion: 3.78541 * 1000, // 3785.41mL
    },
    quarts: {
      unit: "qt",
      name: "Quarts",
      conversion: 946.352946, // 946.352946mL
    },
    pints: {
      unit: "pt",
      name: "Pints",
      conversion: 473.176473, // 473.176473mL
    },
    cups: {
      unit: "cup",
      name: "Cups",
      conversion: 236.588236, // 236.588236mL
    },
    tablespoons: {
      unit: "tbsp",
      name: "Tablespoons",
      conversion: 14.7867648, // 14.7867648mL
    },
    teaspoons: {
      unit: "tsp",
      name: "Teaspoons",
      conversion: 4.92892159, // 4.92892159mL
    },
  },
  time: {
    seconds: {
      unit: "s",
      name: "Seconds",
      conversion: 1, // 1 second
    },
    minutes: {
      unit: "min",
      name: "Minutes",
      conversion: 60, // 60 seconds
    },
    hours: {
      unit: "h",
      name: "Hours",
      conversion: 60 * 60, // 3600 seconds
    },
    days: {
      unit: "d",
      name: "Days",
      conversion: 24 * 60 * 60, // 86400 seconds
    },
    weeks: {
      unit: "wk",
      name: "Weeks",
      conversion: 7 * 24 * 60 * 60, // 604800 seconds
    },
    months: {
      unit: "mo",
      name: "Months",
      conversion: 30 * 24 * 60 * 60, // 2592000 seconds (approx)
    },
    years: {
      unit: "yr",
      name: "Years",
      conversion: 365.25 * 24 * 60 * 60, // 31557600 seconds
    },
  },
  temperature: {
    celsius: {
      unit: "°C",
      name: "Celsius",
      conversion: 1, // Base unit
    },
    fahrenheit: {
      unit: "°F",
      name: "Fahrenheit",
      conversion: (c) => (c * 9) / 5 + 32, // Celsius to Fahrenheit formula
    },
    kelvin: {
      unit: "K",
      name: "Kelvin",
      conversion: (c) => c + 273.15, // Celsius to Kelvin formula
    },
  },
  speed: {
    meterspersecond: {
      unit: "m/s",
      name: "Meters per Second",
      conversion: 1 * 100, // 100 cm/s
    },
    kilometersperhour: {
      unit: "km/h",
      name: "Kilometers per Hour",
      conversion: 100000 / (60 * 60), // 27.7778 cm/s
    },
    milesperhour: {
      unit: "mph",
      name: "Miles per Hour",
      conversion: (2.54 * 63360) / (60 * 60), // 44.704 cm/s
    },
    knot: {
      unit: "kt",
      name: "Knots",
      conversion: (2.54 * 72910) / (60 * 60), // 51.4447 cm/s
    },
  },
  area: {
    squaremeters: {
      unit: "m²",
      name: "Square Meters",
      conversion: 100 * 100, // 10000 cm²
    },
    squarecentimeters: {
      unit: "cm²",
      name: "Square Centimeters",
      conversion: 1, // 1 cm²
    },
    squarekilometers: {
      unit: "km²",
      name: "Square Kilometers",
      conversion: 100000 * 100000, // 1e10 cm²
    },
    acres: {
      unit: "ac",
      name: "Acres",
      conversion: 40468564.224, // 40468564.224 cm²
    },
    hectares: {
      unit: "ha",
      name: "Hectares",
      conversion: 1000000, // 1000000 cm²
    },
  },
  energy: {
    joules: {
      unit: "J",
      name: "Joules",
      conversion: 1, // Base unit
    },
    kilojoules: {
      unit: "kJ",
      name: "Kilojoules",
      conversion: 1000, // 1000 J
    },
    calories: {
      unit: "cal",
      name: "Calories",
      conversion: 4.184, // 1 cal = 4.184 J
    },
    kilocalories: {
      unit: "kcal",
      name: "Kilocalories",
      conversion: 4184, // 1 kcal = 4184 J
    },
    wattHours: {
      unit: "Wh",
      name: "Watt Hours",
      conversion: 3600, // 3600 J
    },
  },
};

let from_unit = null;
let to_unit = null;

const type = document.getElementById("type");
type.addEventListener("change", (e) => {
  updateSelection(e.target.value);
});

const from = document.getElementById("from");

const to = document.getElementById("to");

const from_input = document.getElementById("from_input");
const to_input = document.getElementById("to_input");

to.addEventListener("change", (e) => {
  to_unit = getUnit(type.value, e.target.value);
  updateValues(from_input.value);
});

from.addEventListener("change", (e) => {
  from_unit = getUnit(type.value, e.target.value);
  updateValues(from_input.value);
});

from_input.addEventListener("input", (e) => {
  value = e.target.value;
  updateValues(value);
});

function updateSelection(type) {
  switch (type) {
    case "length":
      appendOptions(from, SELECTIONS.length);
      appendOptions(to, SELECTIONS.length);
      from_unit = SELECTIONS.length.meters;
      to_unit = SELECTIONS.length.meters;
      break;
    case "mass":
      appendOptions(from, SELECTIONS.weight);
      appendOptions(to, SELECTIONS.weight);
      from_unit = SELECTIONS.weight.kilograms;
      to_unit = SELECTIONS.weight.kilograms;
      break;
    case "time":
      appendOptions(from, SELECTIONS.time);
      appendOptions(to, SELECTIONS.time);
      from_unit = SELECTIONS.time.seconds;
      to_unit = SELECTIONS.time.seconds;
      break;
    case "temperature":
      appendOptions(from, SELECTIONS.temperature);
      appendOptions(to, SELECTIONS.temperature);
      from_unit = SELECTIONS.temperature.celsius;
      to_unit = SELECTIONS.temperature.celsius;
      break;
    case "speed":
      appendOptions(from, SELECTIONS.speed);
      appendOptions(to, SELECTIONS.speed);
      from_unit = SELECTIONS.speed.meterspersecond;
      to_unit = SELECTIONS.speed.meterspersecond;
      break;
    // case "data":
    //   appendOptions(from, SELECTIONS.data);
    //   appendOptions(to, SELECTIONS.data);
    //   from_unit = SELECTIONS.data.bits;
    //   to_unit = SELECTIONS.data.bits;
    //   break;
    default:
      from.innerHTML = "";
      to.innerHTML = "";
      break;
  }
}

function appendOptions(select, options) {
  for (const key in options) {
    const option = document.createElement("option");
    option.value = key;
    option.text = options[key].name;
    select.appendChild(option);
  }
}

function getUnit(type, value) {
  return SELECTIONS[type][value];
}

function updateValues(value) {
  if (from_unit) {
    const conversion = from_unit.conversion;
    if (to_unit) {
      const result = value * conversion;
      const currency = to_unit.conversion;
      to_input.value = result / currency;
    }
  }
}

function reverse() {
  const from_value = from_input.value;
//   const to_value = to_input.value;
//   from_input.value = to_value;
//   to_input.value = from_value;
  
  const from_select = from.value;
  const to_select = to.value;

  from.value = to_select;
  to.value = from_select;
  
  from_unit = getUnit(type.value, to_select);
  to_unit = getUnit(type.value, from_select);
  updateValues(from_value);
}

/** initializations */
updateSelection(type.value);
