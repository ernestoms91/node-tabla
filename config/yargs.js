const { describe } = require('yargs');

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'Es la base de la tabla de multiplicar'
    
})
.option('l', {
    alias: 'lista',
    type: 'boolean',
    default:'true',    
    describe:'Decide si se muestra la lista'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default:10,
    describe:'Decide hasta que numero multiplica'
})
 .check((argv, options) => {
    console.log('yargs', argv.b);
     if(isNaN(argv.b)){
        throw 'La  base tiene que ser un numero'
     }
    return true;
}) 
.argv;

module.exports = argv;