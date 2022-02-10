

let mostrarFavoritos = document.getElementById('mostrarFavoritos');

const Pets = () => {
    const urlFavoritos = 'http://localhost:5003/favoritos';
    const favid = JSON.parse(localStorage.getItem('mascota'));

    favid.forEach(element => {
        const { imgcard, id } = element;
        const objFav = {
            id,
            imgcard
        }
        fetch(urlFavoritos, {
            method: 'POST', 
            body: JSON.stringify(objFav),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
        
    });
}



    
    

