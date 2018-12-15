//Declaración de variables
var customersArray = [];
var productsArray = [];
var numbercustomers = 1000;
var numberproducts = 10000; //number of different products its possible to get throught this machine



//PASO 1: CREAMOS LOS PRIMEROS OBJETOS
//Creación de objectos

//Máquina expendora
//-xCaja registradora //caja donde va la pasta - Esto no se incluye porque esta máquina no va con monedas.
var cajaregistradora ={};
//Microcontrolador: Se encarga de gestionar todos los subsistemas de la máquina
var microcontrollador = {};
var lectoraDetarjetas = {}; //Lectora de tarjetas
var stock = {}; //Stock
var Sistema de diagnóstico = {}; //Sistema de diagnóstico
var brazorobot = {};
var Fuente de alimentación = {};
-Teléfono de mantenimiento y reporte
-Puerta de mantenimiento
-Llave de mantenimiento
-Cerradura de mantenimiento



//Cliente

//Productos

/*PASO 2: Creamos los primeros perfiles en el array de clientes:
	-Nombre
	-Usuario
	-Contraseña
	-Tipo de Usuario
	-Presupuesto
*/	

/*PASO 3: Creamos varios métodos para gestionar a los clientes y sus necesidades
Metodos:

Consultar saldo de un cliente
Devolverá el saldo existente o -1 en caso de error
Comprobaremos la contraseña y el usuario
Consultar gastos de un cliente
Devolverá un array o false en caso de error
Comprobaremos la contraseña y el usuario
Agregar un cliente
Eliminar un cliente
Caracteristicas:

Evitaremos que se registren usuarios que ya existan
Evitaremos eliminar usuarios que no existan
Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola
*/

/*PASO 6:Paso 6 - (Nivel Avanzado ♦️) Ahora podemos agregar el método para saber la disponibilidad de stock

Importante:
Es necesaria clave (adminsitrador)
Debemos saber las existencias
Debemos saber que productos estan disponibles y cuales no.
Debemos incluir el código y el nombre
Cuando se imprima el informe... es necesario incluir la fecha.


----
Ejemplo de Informe
----

************************
En total tenemos 6 productos
----------------------------
Nombre: Risketos
Código: C1
Stock: 100
Disponibilidad: true
----------------------------
Nombre: KitKat
Código: C2
Stock: 4
Disponibilidad: true
----------------------------
Nombre: Chicles Orbit
Código: C3
Stock: 6
Disponibilidad: true
----------------------------
Nombre: Pipas Solero
Código: C4
Stock: 1
Disponibilidad: true
----------------------------
Nombre: Demonios de Fresa
Código: C5
Stock: 10
Disponibilidad: true
----------------------------
Nombre: Chetos
Código: C6
Stock: 5
Disponibilidad: true
************************

 */



//Inicializamos el universo
//Generamos los clientes

//Generamos los productos
/*
Nombre
Código
Stock
Disponibidad
*/
//Declaración de funciones


/*Programa principal--
-Interacción Cliente - Máquina

*/