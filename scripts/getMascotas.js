

let btnCategoria1 = document.getElementById('btnCategory1')
let btnCategoria2 = document.getElementById('btnCategory2')
let mostrarElementos = document.querySelector('.grid-elementos')

btnCategoria1.addEventListener('click', () => {


    const getPerros = async () => {
        const urlPerro = 'http://localhost:5002/Perros'
        mostrarElementos.innerHTML = ''
        const resp = await fetch (urlPerro);
        const data = await resp.json();


        data.forEach(element => {
            const { imgcard, id } = element
            mostrarElementos.innerHTML += `
            <div class="col elementos">
                <a href="#" class="enlace-detalle-elemento">
                    <div class="">                
                        <img src="${imgcard}" id="${id}" class="perros card-img" alt="...">
                    </div>
                </a>
            </div>
            `
        });
    }
    getPerros();
})

btnCategoria2.addEventListener('click', () => {
    const getGatos = async () => {
        const urlGato = 'http://localhost:5001/Gatos'
        mostrarElementos.innerHTML = ''
        const resp = await fetch (urlGato);
        const data = await resp.json();

        data.forEach(element => {
            const { imgcard, id } = element
            mostrarElementos.innerHTML += `
            <div class="col elementos">
                <a href="#" class="enlace-detalle-elemento">
                    <div class="">                
                        <img src="${imgcard}" id="${id}" class="gatos card-img" alt="...">
                    </div>
                </a>
            </div>
            `
        });
    }
    getGatos();
    
})

mostrarElementos.addEventListener('click', async(e) => {
    const btnPerros = e.target.classList.contains('perros');
    const id = e.target.id;

   if(btnPerros){
       const urlPerro = 'http://localhost:5002/Perros'
       const lista = await fetch(urlPerro);
       const data = await lista.json();
       
       const objeto = data.find(perro => perro.id === Number(id));

       localStorage.setItem("detallePerro", JSON.stringify(objeto));
       window.location.href = 'detailsperros.html';
        }
    })

    mostrarElementos.addEventListener('click', async(e) => {
        const btnGatos = e.target.classList.contains('gatos');
        console.log(btnGatos)
        const id = e.target.id;
    
       if(btnGatos){
            const urlGato = 'http://localhost:5001/Gatos'
           const lista = await fetch(urlGato);
           const data = await lista.json();
           
           const objeto = data.find(gato => gato.id === Number(id));
    
           localStorage.setItem("detalleGato", JSON.stringify(objeto));
           window.location.href = 'detailsgatos.html';
            }
        })
