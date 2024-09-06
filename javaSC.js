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
})*/

/*EJERCICIO4_P2*/

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

