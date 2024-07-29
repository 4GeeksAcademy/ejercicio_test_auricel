// Tasa de conversión de un euro a otras monedas
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07, // dólar estadounidense
    "GBP": 0.87  // libra esterlina
};

// Función para convertir de Euros a Dólares
function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

// Función para convertir de Dólares a Yenes
function fromDollarToYen(dollars) {
    // Primero convertimos de dólares a euros, luego de euros a yenes
    let euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"];
}

// Función para convertir de Yenes a Libras Esterlinas
function fromYenToPound(yen) {
    // Primero convertimos de yenes a euros, luego de euros a libras
    let euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"];
}

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};