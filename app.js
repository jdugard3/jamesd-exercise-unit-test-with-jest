const sum = (addend1, addend2) => {
return addend1 + addend2; 
}


const fromEurotoDollar = function (valueInEuro){
    let valueInDollar = valueInEuro * 1.07; 
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar){
    let valueInYen = valueInDollar * 154.62;
    return valueInYen;
}

const fromYenToPound = function (valueInYen){
    let valueInPound = valueInYen * 0.87; 
    return valueInPound;
}

module.exports = { sum, fromEurotoDollar, fromDollarToYen, fromYenToPound };