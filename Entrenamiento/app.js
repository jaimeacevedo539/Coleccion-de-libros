/*let libroA = {
    libro: 'El libro de JS',
    autor: 'jaime',
    paginas: 400,
    publicado: false
}

let libroB = {
    libro: 'El libro de JAVA',
    autor: 'jaimito',
    paginas: 800,
    publicado: true
}

let getResumen = (libro) =>{
    return{
        resumen: `${libro.libro} creado por ${libro.autor}`,
        resumenPaginas: `${libro.libro} tiene ${libro.paginas} paginas`
    }
}

let libroAresumen = getResumen(libroA);
let libroBresumen = getResumen(libroB);

console.log(libroAresumen.resumen, libroAresumen.resumenPaginas);
console.log(libroBresumen.resumen, libroBresumen.resumenPaginas);
*/

setTimeout(()=> console.log('llamado asíncrono'), 2000);

alert('el mensaje en consola debería salir en dos segundos');
