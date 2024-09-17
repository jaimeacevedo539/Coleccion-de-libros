//localStorage.setItem('nombre','Jaime');
//console.log(localStorage.getItem('nombre'))
//localStorage.removeItem('nombre')

const usuario ={
    nombre: 'jaime',
    edad: 30
}

const usuarioJson = JSON.stringify(usuario);
localStorage.setItem('usuario',usuarioJson)