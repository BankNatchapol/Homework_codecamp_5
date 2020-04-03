function extractCurrencyValue(string,rate){
    return parseInt(string.slice(1))*rate;
}

console.log(extractCurrencyValue('$120',30.5));