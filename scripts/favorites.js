let mostrarFavoritos = document.querySelector('.contenedorFav') 

let masFavorite = JSON.parse(localStorage.getItem("favMas"));
masFavorite = masFavorite !== null ? masFavorite : "";

const getFavorito = () => {

    const {imgcard, id} = masFavorite;

    mostrarFavoritos.innerHTML += `
    <div class="col elementos">
    <a href="#" class="enlace-detalle-elemento">
        <div class="">                
            <img src="${imgcard}" id="${id}" class="perros gatos card-img" alt="...">
        </div>
    </a>
    </div>

    `
}

document.addEventListener('DOMContentLoaded',getFavorito)