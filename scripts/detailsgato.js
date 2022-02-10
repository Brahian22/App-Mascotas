const container = document.querySelector("#contenedor");

let detalleGato = JSON.parse(localStorage.getItem("mascota"));

const getDetalleGato = () => {

    detalleGato.forEach(element => {
        
    const {nombre,imagen,raza,edad,historia,id,imgcard} = element;

    container.innerHTML += `
    <div class="tarjeta">

            <a href="listamascotas.html" class="img1"><i class="bi bi-arrow-left"></i></a>
            <img class="imgmas" src=${imagen} alt="">
            <div class="back">
                <div class="primer">
                    <h1 class="name"> <b>${nombre}</b><img
                            src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101011/Mascotas/female_i7cm3j.png"
                            alt=""></h1>
                    <button id="favoritosG" onClick="Pets()" class="btnfav" ><i class="bi bi-heart-fill btnfav"></i></button>
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
                        <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101840/Mascotas/jugueton_j7ksyv.png"
                            alt="">
                        <p>Juguetón</p>
                    </div>
                    <div class="borders">
                        <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644101840/Mascotas/inquieto_aqaxfz.png"
                            alt="">
                        <p>Inquieto</p>
                    </div>
                    <div class="borders">
                        <img src="https://res.cloudinary.com/ds5jsdvba/image/upload/v1644128630/Mascotas/tierno_tn2hqp.png"
                            alt="">
                        <p>Tierno</p>
                    </div>
                   
                </div>
                <div class="historia">
                    <h2><b>Historia de ${nombre}</b></h2>
                    <p>${historia}</p>
                </div>
                <div class="publicado">
                    
                    <img src="https://as1.ftcdn.net/v2/jpg/00/95/15/64/1000_F_95156415_nPjlwL7PhMITASVlCqFDJ4IMuqsIuYaX.jpg" alt="">
                    
                    <p>Publicado por <br>
                             <b>Juan Jesus</b></p>
                    <button>Contactar</button>
                </div>
            </div>
        </div>
  `

});
}

document.addEventListener('DOMContentLoaded',getDetalleGato)

