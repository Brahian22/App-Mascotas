const urlFavoritos = 'http://localhost:5003/favoritos';
let mostrarFavoritos = document.getElementById('mostrarFavoritos');

document.addEventListener('DOMContentLoaded', async ()=>{
    
    const resp = await fetch(urlFavoritos);
    const data = await resp.json();
    data.forEach(element => {
        const { imgcard, id } = element;
        mostrarFavoritos.innerHTML += `
        <div class="col elementos">
    <a href="#" class="enlace-detalle-elemento">
        <div class="">                
            <img src="${imgcard}" id="${id}" class="perros gatos card-img" alt="...">
        </div>
    </a>
    </div>
        `
        
    })
    
})