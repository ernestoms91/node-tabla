const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base , boleano, multi) =>{
   
    try {

        console.log('------------'.blue);
        console.log(`Tabla del ${base}`.green);
        console.log('------------'.blue);
    
        let salida, consola='';
        if(boleano){
            for(let i =0; i<=multi; i++){
                salida += ` ${base} x ${i} = ${base * i}\n`;
                consola += ` ${base} ${'x'.green} ${i} = ${base * i}\n`;
                
        }
    }
        console.log(consola);
    
        fs.writeFileSync (`./salida/tabla-${base}.txt`, salida);
        return (`tabla-${base}.txt`.rainbow);
    } catch (err) {
        throw err;
    }
   
}

module.exports ={
   crearArchivo
}