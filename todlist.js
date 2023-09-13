let cuerpo = document.querySelector("body")
let contenedorTareas = document.querySelector(".tareas")
let boton = document.querySelector("button.agregar")
let botonborrar = document.querySelector("button.borrar")
let comenzarDesde = 3
let tareas = []
//console.log("mira lo que hay",cuerpo);

botonborrar.addEventListener("click", function (evento){
    evento.preventDefault()
    borrar("clave-rosa")
    contenedorTareas.innerHTML = ""
    const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
})


cuerpo.addEventListener("click", function (evento){
    console.log("hisiste click en", evento)
    if(evento.target.tagName == "INPUT" && 
        evento.target.type == "checkbox"
        ) {
        console.log("el id del input es" , evento.target.id);
        let id = evento.target.id
        document.querySelector("label[for="+id+"]").remove()
        document.querySelector("."+id).remove()
        evento.target.remove()
        guardartodo()
        if(contenedorTareas.children.length == 0){
            const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
        }
    }

})

boton.addEventListener("click", function (evento) {
    let texto = document.querySelector("#texto")
    console.log("mira el texto que estaba en el input", texto.value);
       
    if (texto.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'no hay un texto,ingresa uno!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        return
    }
    let contenedor = document.createElement("div")
    contenedor.className = `tarea${comenzarDesde}`
    let tarea = `<input type="checkbox" id="tarea${comenzarDesde}">
                <label for="tarea${comenzarDesde}">${texto.value}
                </label>`
    contenedorTareas.innerHTML += tarea
    tareas.push({
        "id": `tareas${comenzarDesde}`,
        "tarea": `${texto.value}`
    })
    comenzarDesde=comenzarDesde + 1
    contenedorTareas.appendChild(contenedor)
    guardar("clave-rosa" , JSON.stringify(tareas))
})
console.log(
    recuperar("clave-rosa")
);


let tareasArealizar = recuperar("clave-rosa")
console.log("tareas a  analizar", tareasArealizar)
let tareajson = JSON.parse(tareasArealizar);
if(tareasArealizar != null){
    tareas.map(
        function(tarea){
            let contenedor = document.createElement("div")
        contenedor.className = `${tarea.id}`
        let texto = `<input type="checkbox" id=${tarea.id}">
                    <label for=${tarea.id}">${tarea.tarea}</label>`
                    contenedor.innerHTML = texto
                    contenedorTareas.appendChild(contenedor)
        }
    )
}
console.log("que tiene el contenedor tareas?" , contenedorTareas.children);
function guardartodo (){
    const nuevastareas =[]
    for (const clave of contenedorTareas.children){
        console.log("clave", clave.className);
        console.log("texto", clave.children[1].textContent);
        nuevastareas.push({
            "id": `${clave.className}`,
            "tarea": `${clave.children}[1].textcontent}`
        })
    } 
    guardar("clave-rosa", JSON.stringify(nuevastareas))
}