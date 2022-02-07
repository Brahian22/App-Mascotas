const container = document.querySelector("#contenedor");

let detallePerro = JSON.parse(localStorage.getItem("detallePerro"));
detallePerro = detallePerro !== null ? detallePerro : "";

const getDetallePerro = () => {
    const {nombre,imagen,raza,edad,historia,id,imgcard} = detallePerro;

    container.innerHTML += `
    <div class="tarjeta">

    <a href="listamascotas.html" class="img1"><i class="bi bi-arrow-left"></i></a>
    <img class="imgmas" src=${imagen} alt="">
    <div class="back">
        <div class="primer">
            <h1 class="name"> <b>${nombre}</b><img
                    src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644100967/Mascotas/male_prqd3u.png"
                    alt=""></h1>
            <button class="btnfav" id="${id}"><i id="${id}"class="bi bi-heart-fill btnfav"></i></button>
        </div>
        <div class="razayedad">
            <h2><img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101392/Mascotas/raza_qrql1z.png"
                    alt="">${raza}</h2>
            <h2><img class="edad" src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101400/Mascotas/edad_jkbvb6.png"
                    alt="">${edad}</h2>
        </div>
        <div class="ubicacion">
        <p><i class="bi bi-geo-alt"></i>4140 Parker Rd. Allentown, <br>
                  New Mexico 31134</p>
        <h2><b>Personalidad</b></h2>
        </div>
        <div class="cajas">
            <div class="borders">
                <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101840/Mascotas/cari%C3%B1oso_huowhg.png"
                    alt="">
                <p>Cariñoso</p>
            </div>
            <div class="borders">
                <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101840/Mascotas/inquieto_aqaxfz.png"
                    alt="">
                <p>Inquieto</p>
            </div>
            <div class="borders">
                <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101840/Mascotas/jugueton_j7ksyv.png"
                    alt="">
                <p>Juguetón</p>
            </div>
        </div>
        <div class="historia">
            <h2><b>Historia de ${nombre}</b></h2>
            <p>${historia}</p>
        </div>
        <div class="publicado">
            
            <img src="https://previews.123rf.com/images/sanneberg/sanneberg1704/sanneberg170402627/76796479-blue-eyed-mujer-rubia-sonriendo-a-la-c%C3%A1mara.jpg" alt="">
            
            <p>Publicado por <br>
                     <b>Maria Dolores</b></p>
            <a href="mensajeUser1.html"><button>Contactar</button></a>
        </div>
    </div>
</div>
    `
}

document.addEventListener('DOMContentLoaded',getDetallePerro);


container.addEventListener('click', async(e) => {
    const btnfav = e.target.classList.contains('btnfav');
    console.log(btnfav)
    const id = e.target.id;

    if(btnfav) {
        const urlPerro = 'http://localhost:5002/Perros'
        const lista = await fetch(urlPerro);
        const data = await lista.json();

        const objeto = data.find(perro => perro.id === Number(id));
        localStorage.setItem("favMas", JSON.stringify(objeto));
        window.location.href = 'favorites.html';

        
    }
    })