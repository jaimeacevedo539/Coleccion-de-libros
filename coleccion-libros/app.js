//definicion de clases
class Libro{
    constructor(titulo,autor,isbn){
        this.titulo=titulo;
        this.autor=autor;
        this.isbn=isbn; 
    }
}

class UI{
    static mostrarLibro(){
        const libros = Datos.traerLibro();
        libros.forEach((libro) => UI.agregarLibroLista(libro));
    }

    static agregarLibroLista(libro){
        const lista = document.querySelector('#libro-list');

        const fila = document.createElement('tr');
        fila.innerHTML = ` 
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>
        `;
        lista.appendChild(fila);
    }

    static eliminarLibro(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static mostarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container');
        const form = document.querySelector('#libro-form');
        container.insertBefore(div, form);

        setTimeout(() => document.querySelector('.alert').remove(),3000);

    }

    static limpiarCampos(){
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#isbn').value = '';
    }
}

class Datos{
    static traerLibro(){
        let libros;
        if(localStorage.getItem('libros')=== null){
            libros = [];
        }else{
            libros = JSON.parse(localStorage.getItem('libros'));
        }
        return libros;
    }
    
    static agregarLibro(libro){
        const libros = Datos.traerLibro();
        libros.push(libro);
        localStorage.setItem('libros',JSON.stringify(libros));
    }

    static removerLibro(isbn){
        const libros = Datos.traerLibro();

        libros.forEach((libro, index) => {
            if(libro.isbn === isbn){
                libros.splice(index,1);
            }
        });
        localStorage.setItem('libros', JSON.stringify(libros));
    }
}



//cargar de la pagina

document.addEventListener('DOMContentLoaded',UI.mostrarLibro());

//controlar el evento submit
document.querySelector('#libro-form').addEventListener('submit',(e) => {
    e.preventDefault();

    //obtener valores de los campos

    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;

    if(titulo=== '' || autor=== '' || isbn=== ''){
        UI.mostarAlerta('Por favor Ingrese todos los datos', 'danger');
    }else{
        const libro = new Libro(titulo,autor,isbn);
        Datos.agregarLibro(libro);
        UI.agregarLibroLista(libro);
        UI.mostarAlerta('Libro agregado con exito', 'success');
        UI.limpiarCampos();
    }


});

    document.querySelector('#libro-list').addEventListener('click', (e) => {
        UI.eliminarLibro(e.target);
        Datos.removerLibro(e.target.parentElement.previousElementSibling.textContent);
        UI.mostarAlerta('Libro Eliminado', 'success')
    })

