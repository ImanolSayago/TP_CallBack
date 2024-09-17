/*EJERCICIO 1

function mostrarmensaje(parametro,callback)
{
    console.log("el mensaje es: ",parametro);
    callback();
}


mostrarmensaje("hola soy ima",
    function()
    {
        console.log("Ahora se esta ejecutando el callback");
    }
);;

EJERCICIO 2

function sumarAsync(n1,n2,callback)
{
    let suma= n1+n2;
    callback(suma);
};

sumarAsync(10,20, function(suma)
{
    console.log("La suma de los nros es de:",suma);
});


EJERCICIO 3
/*function retrasarEjecucion(nroaretrasar,callback)
{
    console.log("Estoy retrasando la ejecucion, despues de",nroaretrasar, "milisegundos aparecera el callback");
    setTimeout(() => {
        callback();
    }, nroaretrasar);
};

let tiempoaretrasar = prompt("Ingrese el tiempo que desea retrasar la ejecucion del programa:");

retrasarEjecucion(tiempoaretrasar,function()
{
    console.log("Despues de",tiempoaretrasar,"milisegundos, muestro mi msj");
});

EJERCICIO 4

let idabuscar= prompt("Ingrese el id del usuario que desea buscar");


function obtenerDatosUsuarios(idabuscar, callback)
{
    console.log("Obteniendo datos del usuario con id",idabuscar ,",esto puede tardar un momento:");

    setTimeout(() => {
        const datosusuario={
            id:idabuscar,
            nombre: "Imanol",
            Apellido: "Sayago",
            edad: 20,
            Email: "Imanolsayago0@gmail.com"
        }
     callback(datosusuario);
    }, 5000);
}

obtenerDatosUsuarios(idabuscar, function(datosusuario)
{
    console.log("El nombre del usuario es:",datosusuario.nombre);
    console.log("El apellido del usuario es:",datosusuario.Apellido);
    console.log("La edad del usuario es:",datosusuario.edad);
    console.log("El Email del usuario es:",datosusuario.Email);

})*/


/*PARTE 2*/

/*EJERCICIO1_P2

function multiplicar(n1,n2,callback)
{
    let suma = (n1*n2);

    callback(suma);
}

multiplicar(10,10,function(suma)
{
    console.log("El resultado de la multiplicacion es:",suma);
})


/*EJERCICIO2_P2
function operarnumeros(n1,n2,callback,callback2)
{
    console.log("Se ejecutaran 2 callbacks, 1 para sumar y el 2 para restar");

    callback(n1,n2);
    callback2(n1,n2);
}

operarnumeros(10,15,
    function(n1,n2)
{
    console.log("La suma de los numeros es de:",n1+n2);
},

function(n1,n2)
{
    console.log("La resta de los nros es de:",n1-n2);
}
);*/

/*EJERCICIO3_P2

function esperarcallback(parametro,callback)
{
    console.log("Su ejecucion tardara 3 segundos mas gracias al timeout");

    setTimeout(() => {
        callback(parametro);
        
    }, 3000);
}

let mensaje = "Gracias por esperar";
esperarcallback(mensaje,function(mensaje)
{
    console.log(mensaje);
})

        //EJERCICIO4_P2//

let arregloxd=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function filtrarpares(array, callback)
{
    callback(array);
}

filtrarpares(arregloxd,function(arregloxd)
{
    arregloxd.forEach(function(elementos)
    {
    if(elementos%2==0)
    {
        console.log(elementos);
    }
    })
    
} 
);



        //EJERCICIO6_P2//


        //PRACTICANDO SETS//

const miset= new Set([1,2,3,4,5]);
miset.add(6);
miset.delete(3);
console.log(miset);


        //EJERCICIO7_P2//

    //convertir el set anterior en un array//

const arraydesdeset = Array.from(miset);
console.log(arraydesdeset);*/

/*EJERCICIO8_P2

const arreglo8=[1,2,2,3,4,4,5,];

const setborrador = new Set(arreglo8);

const arreglonuevo = Array.from(setborrador);
console.log(arreglonuevo);



        //EJERCICIO9_P2//

let encontrado = setborrador.has(4);
if(encontrado==true)
{
    console.log("El valor 4 si se encuentra dentro del SET");
}
else
{
    console.log("El valor no se encuentra dentro del set");
}*/



        //EJERCICIO10_P2

/*const miset = new Set([1,2,3,4,5,6,7,8,9,10]);

miset.forEach(function(valores)
{
    console.log(valores);
})*/


        //PRACTICA DE MAPS//

        
        //EJERCICIO11//
/*
const mimap = new Map();

mimap.set('nombre', 'Juan');
mimap.set('edad',30);
mimap.set('ciudad','Madrid');

console.log("Mostrando el map antes de la eliminacion de ciudad:",mimap);
//añadiendo nueva entrada//

console.log("Mostrando el map despues de la eliminacion y el añadido de pais");
mimap.set('pais','españa');
mimap.delete('ciudad');

console.log(mimap);

console.log('Accediendo solo a la propiedad nombre:',mimap.get('nombre'));

mimap.forEach(function(valor,k)
{
    console.log("La clave es:",k,"y su valor es:",valor);
})

let existe = mimap.has('edad');

if(existe ==true)
{
    console.log("SI existe la clave edad, ahora te muestro su valor");
    console.log(mimap.get('edad'));
}
else
{
    console.log("No existe la clave edad");
}

const arraydesdeMAP =Array.from(mimap);
console.log(arraydesdeMAP);*/

/*EJERCICIOS AVANZADOS*/

//E1
/*
const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 25 },
    { nombre: "Pedro", edad: 30 }
  ];

  const nombres = personas.map(persona => persona.nombre)
  console.log(nombres);*/

  //E2
/*
  const personas =  [
    { nombre: "Carlos", edad: 17 },
    { nombre: "Ana",edad: 23 }, 
    { nombre: "Luis", edad: 16}
];

const mayores = personas.filter(persona=> persona.edad>18);
console.log(mayores);*/

//E3
/*
const arreglo3 = [2, 3, 4, 2, 3, 5, 4, 5, 6];

const maparepetido = new Map(); 

arreglo3.forEach(numero => {
    if(maparepetido.has(numero))
    {
        maparepetido.set(numero, maparepetido.get(numero)+1);
    }
    else
    {
        maparepetido.set(numero,1);
    }
});

console.log(maparepetido);*/

//ejercicio 5

let objeto = 
{
    a:1,
    b:2,
    c:3
};


