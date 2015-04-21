//
// Paulo Ormachea Gomez
// QADEV02 - Calculatr task
//
// Calculator

var Calculator = function(){

//variable global para la memoria
    var memoria = 0;
    /*
     Metodo para las sumas donde se evalularan los siguientes casos:
     -que se pueda sumar 2 numeros
     -que no se pueda sumar 2 letras
     -que no se pueda sumar 1 letra y un numero
     -que no se pueda sumar 1 numero y una letra
     -que se pueda sumar 1 numero mas lo que la memoria contenga
     */
    this.add = function(a,b){
        if(typeof a == 'number' || b =='number')
            return a+b;

        if(typeof a == 'string' || b =='string')
            throw('Invalid message')

        if(typeof a == 'number' || b =='string')
            throw('Invalid message')

        if(typeof a == 'string' || b =='number')
            throw('Invalid message')

        if(typeof a == 'number' || b ==undefined)
            return a + memoria;

    };

    /*
     Metodo para las restas donde se evalularan los siguientes casos:
     -que se pueda restar 2 numeros
     -que no se pueda restar 2 letras
     -que no se pueda restar 1 letra y un numero
     -que no se pueda restar 1 numero y una letra
     */
    this.subtract = function(a,b){

        if(typeof a == 'number' || b =='number')
            return a-b;

        if(typeof a == 'string' || b =='string')
            throw('Invalid message')

        if(typeof a == 'number' || b =='string')
            throw('Invalid message')

        if(typeof a == 'string' || b =='number')
            throw('Invalid message')
    };
    /*
     Metodo para las multiplicaciones donde se evalularan los siguientes casos:
     -que se pueda multiplicar 2 numeros
     -que no se pueda multiplicar  2 letras
     -que no se pueda multiplicar  1 letra y un numero
     -que no se pueda multiplicar  1 numero y una letra
     */
    this.multiply = function(a,b){

        if(typeof a == 'number' || b =='number')
            return a*b;

        if(typeof a == 'string' || b =='string')
            throw('Invalid message')

        if(typeof a == 'number' || b =='string')
            throw('Invalid message')

        if(typeof a == 'string' || b =='number')
            throw('Invalid message')
    };

    /*
     Metodo para las dividir donde se evalularan los siguientes casos:
     -que se pueda dividir 2 numeros
     -que no se pueda dividir 2 letras
     -que no se pueda dividir  1 letra y un numero
     -que no se pueda dividir  1 numero y una letra
     */
    this.divide = function(a,b){

        if(typeof a == 'number' || b =='number')
            return a/b;

        if(typeof a == 'string' || b =='string')
            throw('Invalid message')

        if(typeof a == 'number' || b =='string')
            throw('Invalid message')

        if(typeof a == 'string' || b =='number')
            throw('Invalid message')
    };



};
