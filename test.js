test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("10 dólares deberían ser convertidos a yenes correctamente", function() {
// Importar la función desde app.js
    const { fromDollarToYen } = require('./app.js');

    // Usar la función como se supone debe ser usada
    const yenes = fromDollarToYen(10);

    // Si 1 USD = 1.07 EUR, entonces 10 USD = 10 / 1.07 EUR
    // Y si 1 EUR = 156.5 JPY, entonces 10 / 1.07 EUR = (10 / 1.07) * 156.5 JPY
    const expected = (10 / 1.07) * 156.5;

    // Esto es la comparación para la prueba unitaria
    expect(yenes).toBeCloseTo(expected, 5);
});

test("1000 yenes deberían ser convertidos a libras correctamente", function() {

    // Importar la función desde app.js

    const { fromYenToPound } = require('./app.js');

    // Usar la función como se supone debe ser usada
    const pounds = fromYenToPound(1000);

    // Si 1 JPY = 1 / 156.5 EUR, entonces 1000 JPY = 1000 / 156.5 EUR
    // Y si 1 EUR = 0.87 GBP, entonces 1000 / 156.5 EUR = (1000 / 156.5) * 0.87 GBP
    const expected = (1000 / 156.5) * 0.87;

    // Esto es la comparación para la prueba unitaria
    expect(pounds).toBeCloseTo(expected, 5);
});