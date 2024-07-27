const convertToCelsius = function(tempFarenheit) {
  return roundTo((tempFarenheit - 32) * (5/9),1) ; 
};

const convertToFahrenheit = function(tempCelcius) {
  return  roundTo(tempCelcius * (9/5) +32 ,1);
};
function roundTo(num, decimalPlaces)
{
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}

console.log(convertToCelsius(32));
console.log(convertToCelsius(100));
console.log(convertToCelsius(-100));
console.log(convertToFahrenheit(0));
console.log(convertToFahrenheit(73.2));
console.log(convertToFahrenheit(-10));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
