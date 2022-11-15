let peliculas=[
    {
        nombre:"BLACK",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/black.png?alt=media&token=354fc0dd-b7a6-4b80-a69c-65c032c3b75a"

    },
    {
        nombre:"COCODRILO",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/cocodrilo.jpg?alt=media&token=28f78224-6034-40f8-9079-5adef8c66a79"
    },
    {
        nombre:"FEDORA",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/fedora.png?alt=media&token=70d257dd-61ed-4b4e-9166-12cbe5430dce"
    },
    {
        nombre:"WAKANDA",
        duracion:104,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/wakanda.jpg?alt=media&token=aae4abc8-c8d8-4d6a-a08a-a5695e84177e"
    },
    {
        nombre: "HABITACION",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/habitacion.png?alt=media&token=2a239102-fbf1-4279-8223-17ad9fe350c3"
    },
    {
        nombre: "SONRIE",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/sonrie.jpg?alt=media&token=a4fb2b48-fc63-491c-92df-6a9ad3ee6e61"
    },
    {
        nombre: "LUZ DEL DIABLO",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/luz.png?alt=media&token=2da1f260-48b0-4c4d-8d7f-7a213ce5fdf5"
    },
    {
        nombre: "REENCARNACION",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/reencarnacion.png?alt=media&token=bc27562b-80fc-4dfb-8a04-80bd4739fe2e"
    },
    {
        nombre: "REYES DEL MUNDO",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/reyesdelmundo.jpg?alt=media&token=8b2b648a-c4a6-4826-84e4-e4c56616225d"
    },
    {
        nombre: "LA TRAVIATA",
        duracion:95,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemadavid-d68c1.appspot.com/o/traviata.png?alt=media&token=13822812-5dd4-40ab-8d0e-eccbc8008ebe"
    }
]

//creamos una referencia al espacio html donde queremos hacer al render(pintar etiquetas)
let etiquetaFila =  document.getElementById("fila")
//si ya tengo datos que normalmente llegan al front como un arreglo de objetos debemos recorrer y depurar dicha informacion
peliculas.forEach(function(pelicula){
    //para pintar la informacion de cada pelicula debemos aplicar una tecnica conocida como traversing
    //traversing = crear etiquetas de html desde js
    let columna = document.createElement("div")
    columna.classList.add("col")

    let tarjeta = document.createElement("div")
    tarjeta.classList.add("card","h-100","shadow")

    let poster = document.createElement("img")
    poster.classList.add("img-fluid","w-100")
    poster.src = pelicula.poster

    let nombre = document.createElement("h1")
    nombre.classList.add("text-center","fw-bold")
    nombre.textContent = pelicula.nombre

    let duracion = document.createElement("h5")
    duracion.classList.add("text-start")
    duracion.textContent= "Duracion: " + pelicula.duracion + "Min"

   //padres e hijos (jerarquia de etiquetas)

    etiquetaFila.appendChild(columna)
    columna.appendChild(tarjeta)
    tarjeta.appendChild(poster)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(duracion)
   
    
})