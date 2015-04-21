//
// Paulo Ormachea Gomez
// QADEV02 - Calculatr task
//

/*
 Metodo para las sumas donde se evalularan los siguientes casos:
 -que se pueda sumar 2 numeros
 -que no se pueda sumar 2 letras
 -que no se pueda sumar 1 letra y un numero
 -que no se pueda sumar 1 numero y una letra
 -que se pueda sumar 1 numero mas lo que la memoria contenga
 */
describe('Suma', function() {

    it('should be able to add two numbers', function(){
        var calculator = new Calculator();
        var actRes = calculator.add(4, 2);
        var expRes = 6;
        expect(actRes).toBe(expRes);
    });


    it('should not be able evaluate two letters', function(){
        var calculator = new Calculator();
        expect(function () {calculator.add('a','b')}).toThrow('Invalid message');//if fn throw exception
    });


    it('should not be able evaluate 1 letter and 1 number', function(){
        var calculator = new Calculator();
        expect(function () {calculator.add('3','b')}).toThrow('Invalid message');//if fn throw exception
    });


    it('should not be able evaluate 1 number and 1 letter', function(){
        var calculator = new Calculator();
        expect(function () {calculator.add('a','4')}).toThrow('Invalid message');//if fn throw exception
    });

    it('should be able evaluate 1 number and the memory', function(){
        var calculator = new Calculator();
        var actRes = calculator.add(4);
        var expRes = 4;
        expect(actRes).toBe(expRes);
    });

    /*
     Metodo para las restas donde se evalularan los siguientes casos:
     -que se pueda restar 2 numeros
     -que no se pueda restar 2 letras
     -que no se pueda restar 1 letra y un numero
     -que no se pueda restar 1 numero y una letra
     */
    describe('Resta', function() {

        it('should be able to subtract two numbers', function(){
            var calculator = new Calculator();
            var actRes = calculator.subtract(4, 2);
            var expRes = 2;
            expect(actRes).toBe(expRes);
        });


        it('should not be able evaluate 2 letters', function(){
            var calculator = new Calculator();
            expect(function () {calculator.subtract('a','b')}).toThrow('Invalid message');//if fn throw exception
        });


        it('should not be able evaluate 1 number and 1 letter', function(){
            var calculator = new Calculator();
            expect(function () {calculator.subtract('3','b')}).toThrow('Invalid message');//if fn throw exception
        });


        it('should not be able evaluate 1 letter and 1 number', function(){
            var calculator = new Calculator();
            expect(function () {calculator.subtract('a','4')}).toThrow('Invalid message');//if fn throw exception
        });


    });

    /*
     Metodo para las multiplicaciones donde se evalularan los siguientes casos:
     -que se pueda multiplicar 2 numeros
     -que no se pueda multiplicar  2 letras
     -que no se pueda multiplicar  1 letra y un numero
     -que no se pueda multiplicar  1 numero y una letra
     */

    describe('Mutiplicacion', function() {

        it('should be able to multiply two numbers', function(){
            var calculator = new Calculator();
            var actRes = calculator.multiply(4, 2);
            var expRes = 8;
            expect(actRes).toBe(expRes);
        });


        it('should not be able evaluate 2 letters', function(){
            var calculator = new Calculator();
            expect(function () {calculator.multiply('a','b')}).toThrow('Invalid message');//if fn throw exception
        });


        it('should not be able evaluate 1 letter and 1 number', function(){
            var calculator = new Calculator();
            expect(function () {calculator.multiply('a','4')}).toThrow('Invalid message');//if fn throw exception
        });


        it('should not be able evaluate 1 number and 1 letter', function(){
            var calculator = new Calculator();
            expect(function () {calculator.multiply('4','b')}).toThrow('Invalid message');//if fn throw exception
        });


    });
    /*
     Metodo para las dividir donde se evalularan los siguientes casos:
     -que se pueda dividir 2 numeros
     -que no se pueda dividir 2 letras
     -que no se pueda dividir  1 letra y un numero
     -que no se pueda dividir  1 numero y una letra
     */

    describe('Division', function() {

        it('should be able to add two numbers', function(){
            var calculator = new Calculator();
            var actRes = calculator.divide(4, 2);
            var expRes = 2;
            expect(actRes).toBe(expRes);
        });


        it('should not be able evaluate 2 letters', function(){
            var calculator = new Calculator();
            expect(function () {calculator.divide('a','b')}).toThrow('Invalid message');//if fn throw exception
        });


        it('should not be able evaluate 1 letters and 1 number', function(){
            var calculator = new Calculator();
            expect(function () {calculator.divide('a','b')}).toThrow('Invalid message');//if fn throw exception
        });


        it('should not be able evaluate 1 number and 1 letter', function(){
            var calculator = new Calculator();
            expect(function () {calculator.divide('a','b')}).toThrow('Invalid message');//if fn throw exception
        });

    });

});
