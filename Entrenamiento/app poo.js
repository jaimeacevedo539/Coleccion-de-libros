// class Persona{
//     constructor(nombre,edad,profesiones =[]){
//         this.nombre = nombre;
//         this.edad = edad;
//         this.profesiones=profesiones;
//     }

//     getBiografia(){
//         let biografia = `${this.nombre}, tiene ${this.edad}, años y sus profesiones: `;

//         this.profesiones.forEach((profesion) => {
//             biografia += `${profesion}, `;
//         });
//         return biografia;
//     }
// }

// class Empleado extends Persona{
//     constructor(nombre,edad,profesiones=[],sueldo,puesto){
//         super(nombre,edad,profesiones);
//         this.sueldo=sueldo;
//         this.puesto=puesto;
//     }
//     getBiografia(){
//         return super.getBiografia()+` Puesto: ${this.puesto} y su salario: ${this.sueldo}`
//     }
// }

// const Persona1 = new Empleado('jaime',30,['Ingeniero','Piloto'],1500,'desarrollador');
// const Persona2 = new Persona('cuellos',23,['creativa','digitales'],1500,'creacion');

// console.log(Persona1.getBiografia())
// console.log(Persona2.getBiografia())

// const ceviche =[
//     {
//         codigo: 1,
//         titulo: 'pescado'
//     },
//     {
//         codigo:2,
//         titulo: 'mariscos'
//     },
//     {
//         codigo: 3,
//         titulo:'cebolla'
//     }
// ];

// const buscarIngrediente = function(ceviche,titulo){
//     const index= ceviche.findIndex(function(ing,index){
//         return ing.titulo === titulo;
//     });
//     return index;
// }

//console.log(ceviche[buscarIngrediente(ceviche,'pescado')])
 