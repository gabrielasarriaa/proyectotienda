/*ARRAY los array son arreglos de datos 
tambien llamados variables especiales
se utilizan para guardar muchos datos
 en una sola variable*/ 
let empleados = Array(
    {
        id:1,
        nombre:"Marcela Gallego Restrepo",
        cargo:"asesora",
        telefono:"3215775122",
        correo:"marcelalabonita@gmail.com",
        salario:1800000,
        contactoEmercia:"323577641",
        foto:"./img/asesoramarcela.avif"
    },
    {
        id:2,
        nombre:"Dulce Maria Agudelo",
        cargo:"asesora",
        telefono:"3218875122",
        correo:"dulcemaria@gmail.com",
        salario:1800000,
        contactoEmercia:"313577641",
        foto:"./img/asesora9.jpg"
    },
    {
        id:3,
        nombre:"Greicy Rendon",
        cargo:"asesora",
        telefono:"3215777722",
        correo:"greicyrendon@gmail.com",
        salario:1800000,
        contactoEmercia:"354577641",
        foto:"./img/asesora10.jpg"
    },
    {
        id:4,
        nombre:"Maria Jose Marquez",
        cargo:"costurera",
        telefono:"3215778822",
        correo:"mariajosemarquez@gmail.com",
        salario:1800000,
        contactoEmercia:"323577633",
        foto:"./img/costurera1.webp"
    },
    {
        id:5,
        nombre:"Nancy Manco",
        cargo:"costurera",
        telefono:"3215775122",
        correo:"nancymancoo@gmail.com",
        salario:1800000,
        contactoEmercia:"323577641",
        foto:"./img/costurera2.jpg"
    },
    {
        id:6,
        nombre:"Juana Bolivar",
        cargo:"costurera",
        telefono:"3215775122",
        correo:"JuanaBolivar@gmail.com",
        salario:1800000,
        contactoEmercia:"323577641",
        foto:"./img/costurera3descarga.jpg"
    },
    {
        id:7,
        nombre:"Susana Agudelo",
        cargo:"directora de bodega",
        telefono:"3215775122",
        correo:"SusanaAgudelo@gmail.com",
        salario:4000000,
        contactoEmercia:"323577641",
        foto:"./img/directorabodega17.jpg"
    },
    {
        id:8,
        nombre:"Marcela Camila Gallardo",
        cargo:"directora financiera",
        telefono:"3215775122",
        correo:"MarcelaCamilaGallardo@gmail.com",
        salario:6000000,
        contactoEmercia:"323577641",
        foto:"./img/directorafinanciera11.avif"
    },
    {
        id:9,
        nombre:"Maria Camila Martinez",
        cargo:"diseñadora",
        telefono:"3215775122",
        correo:"Maria}CamilaMartinez@gmail.com",
        salario:5000000,
        contactoEmercia:"323577641",
        foto:"./img/diseñadora6.jpg"
    },
    {
        id:10,
        nombre:"Juan David Valdez",
        cargo:"administrador",
        telefono:"3215775122",
        correo:"JuanDavidValdez@gmail.com",
        salario:8000000,
        contactoEmercia:"323577641",
        foto:"./img/administrador12.jpg"
    },
    {
        id:11,
        nombre:"Gabriela Sarria",
        cargo:"administradora",
        telefono:"3215775122",
        correo:"GabrielaSarria@gmail.com",
        salario:1000000,
        contactoEmercia:"323577641",
        foto:"./img/administradora.jpg"
    },
    {
        id:12,
        nombre:"Maria Diaz Pacheco",
        cargo:"aprendiz",
        telefono:"3215775122",
        correo:"MariaDiazPacheco@gmail.com",
        salario:1800000,
        contactoEmercia:"323577641",
        foto:"./img/aprendiz21.jpg"
    },
    {
        id:13,
        nombre:"Fania Mariño",
        cargo:"Desarrolladora de Software",
        telefono:"3215775122",
        correo:"FaniaMariño@gmail.com",
        salario:4500000,
        contactoEmercia:"323577641",
        foto:"./img/desarrolladora8.jpg"
    },
    {
        id:14,
        nombre:"Daisy luz Ramirez",
        cargo:"domiciliaria",
        telefono:"3215775122",
        correo:"DaisyluzRamirez@gmail.com",
        salario:2000000,
        contactoEmercia:"323577641",
        foto:"./img/domiciliaria19.jpg"
    },
    {
        id:15,
        nombre:"Jose Raul Ordoñez",
        cargo:"domiciliario",
        telefono:"3215775122",
        correo:"JoseRaulOrdoñez@gmail.com",
        salario:2000000,
        contactoEmercia:"323577641",
        foto:"./img/domiciliario18.jpg"
    },
    {
        id:16,
        nombre:"Marcela David perez",
        cargo:"oficios varios",
        telefono:"3215775122",
        correo:"MarcelaDavidperez@gmail.com",
        salario:1800000,
        contactoEmercia:"323577641",
        foto:"./img/oficiosvarios.jpg"
    },
    {
        id:17,
        nombre:"Raul Garcia Restrepo",
        cargo:"marketing",
        telefono:"3215775122",
        correo:"RaulGarciaRestrepo@gmail.com",
        salario:6000000,
        contactoEmercia:"323577641",
        foto:"./img/marketin14.jpg"
    },
    {
        id:18,
        nombre:"Camila Ortiz Yanez",
        cargo:"seguridad",
        telefono:"3215775122",
        correo:"CamilaOrtizYanez@gmail.com",
        salario:195000,
        contactoEmercia:"323577641",
        foto:"./img/seguridad20.jpg"
    },
    {
        id:19,
        nombre:"Juan Gabriel Garcia",
        cargo:"Trabajador social",
        telefono:"3215775122",
        correo:"JuanGabrielGarcia@gmail.com",
        salario:2500000,
        contactoEmercia:"323577641",
        foto:"./img/trabajadorsocial13.webp"
    },
    {
        id:20,
        nombre:"Lourdes Del Carmen Franco",
        cargo:"publicista",
        telefono:"3215775122",
        correo:"LourdesDelCarmenFranco@gmail.com",
        salario:3500000,
        contactoEmercia:"323577641",
        foto:"./img/publicista7descarga.jpg"
    },   
)
/*el dato celular se guarda entre comillas
 por que es un numero al que no se le pueden 
 hacer operaciones matematicas */ 

/*el nombre de las llaves "{}" es 
OBJETO esto es una variable especial 
para almacenar y transportar informacion 
atravez de atibutos*/

//creando una referencia al contenedor de empleados 
let contenedor = document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos
//1.debo recorrer la base de datos del problema

empleados.forEach(function (empleado) {

   console.log(empleado)

   let columna=document.createElement("div")
   columna.classList.add("col")

   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card","shadow")

   let foto=document.createElement("img")
   foto.classList.add("img-fluid","mx-auto","d-block")
   foto.src=empleado.foto

   let nombre=document.createElement("h3")
   nombre.textContent=empleado.nombre
   
   let cargo=document.createElement("h3")
   cargo.textContent=empleado.cargo

   let telefono=document.createElement("h3")
   telefono.textContent=empleado.telefono

   let correo=document.createElement("h3")
   correo.textContent=empleado.correo
   
   let salario=document.createElement("h3")
   salario.textContent=empleado.salario


   //se asocian en orden logico 
   
   tarjeta.appendChild(foto)
   tarjeta.appendChild(nombre)
   tarjeta.appendChild(cargo)
   tarjeta.appendChild(telefono)
   tarjeta.appendChild(nombre)
   tarjeta.appendChild(correo)
   tarjeta.appendChild(salario)
   columna.appendChild(tarjeta)
   contenedor.appendChild(columna)


})