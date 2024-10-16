const from = document.getElementById("from");

const to = document.getElementById("to");

const from_input = document.getElementById("from_input");
const to_input = document.getElementById("to_input");

const API_KEY = "9c0db213b1c66f556a8569a0"

const currencies = {

}

let conversions = {

}

function getCurrencies() {
  fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`, { method: "GET" })
    .then(response => response.json())
    .then(data => {
      for (const currency of data.supported_codes) {
        currencies[currency[0]] = { code: currency[0], name: currency[1] }
      }
      console.log(currencies)
      appendOptions(from, currencies)
      appendOptions(to, currencies)
      getConversions(from.value);

    })
}

function getConversions(base_code){
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${base_code}`, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        conversions = data.conversion_rates;
        console.log(conversions)
        updateValues(from_input.value)

      })
}
function getUnit(value) {
  return currencies[value];
}

to.addEventListener("change", (e) => {
  to_unit = getUnit(e.target.value);
  console.log(to_unit);
  // updateValues(from_input.value);
});

from.addEventListener("change", (e) => {
  from_unit = getUnit(e.target.value);
  console.log(from_unit);
  const code = from_unit.code;
  getConversions(code);
  // updateValues(from_input.value);
});

from_input.addEventListener("input", (e) => {
  value = e.target.value;
  updateValues(value);
});

function updateValues(value) {
  console.log(from.value)
  const to_code = to.value;
  const conversion = conversions[to_code];
  to_input.value = value * conversion;
}


function appendOptions(select, options) {
  for (const key in options) {
    const option = document.createElement("option");
    option.value = key;
    option.text = options[key].name;
    select.appendChild(option);
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

  getConversions(from.value);
  
}

getCurrencies()
