db.collection('tareas').orderby('titulo').onSnapshot(snapshot => {
    let cambios = snapshot.docChanges();
    console.log(cambios);
})
