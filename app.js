// Esta es mi función que suma dos números
//const sum = (a,b) => {
   // return a + b
//}

// Solo un registro en consola para nosotros
//console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen (dollars) {
    return (dollars/ oneEuroIs["USD"])* oneEuroIs["JPY"];
}

function fromEuroToDollar(eur) {
    return eur * oneEuroIs["USD"];
}
function fromYenToPound (yen) {
    return (yen / oneEuroIs["JPY"])* oneEuroIs["GBP"];
}

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };