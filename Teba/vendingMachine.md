## Requirements

- Solo los usuarios registrados pueden usar la máquina
    - ¿Qué implica? Que con un bucle comprobemos si el usuario existe, luego se le pide la contraseña, se comprueba si es la correcta, y se le da acceso, a la vez que muestra el saldo. 
- El sistema funciona sin dinero real, en su lugar se usa un sistema de puntos
    - ¿Qué implica? El sistema de puntos es inherente a la cuenta del usuario, que puede comprobar su saldo cada vez que accede. La máquina conoce el dato guardado, y al seleccionar producto, 1º mira cuánto cuesta el producto, 2º comprueba si hay suficiente saldo, 3º si sí tiene suficiente saldo, facilita el producto y resta los puntos, 4ª actualiza el saldo del cliente.
- Los usuarios disponen de unos puntos para gastar en la máquina que el departamento de personal asigna
    - ¿Qué implica? Sin complicarlo, que el saldo de puntos es parte del objeto cliente. 
- La maquina no concederá creditos, solo trabaja en base a los puntos disponibles.
    - ¿Qué implica? Punto 2. La máquina comprueba cuánto cuesta el producto y lo compara con el saldo que tiene el cliente. 
- La maquina debe controlar en stock, para agilizar la reposición de lo consumido..
    - ¿Qué implica? 1º comprueba si hay stock (true), 2º después de facilitar el producto, resta 1 unidad del total de cantidad de stock. 3º cuando el stock está llegando a 10uds, pre-avisa. 4º cuando el stock llega a 0uds, devuelve el mensaje: "No disponible". 


## Planificación
1) Comentarios de lo que voy a hacer - estructura, cómo voy a hacerlo
2) Estimación 
3) Tareas pequeñas
4) Cómo comprobaría que eso funciona (test)
5) Programar 👩‍💻👩‍💻

### 1) Comentarios, estructura
#### Paso 1
Crear los primeros objetos básicos: 

```javascript

/*
Crear máquina expendedora con 5 tipos de producto (nombre), código (C), 
cantidad para gestión del stock (stock), disponibilidad (true - false), 
puntos que cuesta (precio).  
*/  

var maquinaExpendedora = {}


// Demo producto
var producto = []


// Demo cliente 
var cliente = [{
  nombre: 
  usuario: 
  contraseña: 
  tipo: 
  presupuesto: 
  gasto: [array de objetos para controlar lo que has comprado]
},{
  nombre: 
  usuario: 
  contraseña: 
  tipo: 
  presupuesto: 
  gasto: [array de objetos para controlar lo que has comprado]
}, 

]

```



#### Paso 2
Creamos los primeros perfiles en el array de clientes 

```js
var clientes = [{
  nombre: 
  usuario: 
  contraseña: 
  tipo: 
  presupuesto: 
  gasto: [array de objetos para controlar lo que has comprado]
},{
  nombre: 
  usuario: 
  contraseña: 
  tipo: 
  presupuesto: 
  gasto: [array de objetos para controlar lo que has comprado]
}, 

]
```

### Paso 3 
Creamos varios métodos para gestionar a los clientes y sus necesidades. 

Métodos:
#### Cliente: 
- Consultar saldo de un cliente: devolverá el saldo existente o -1 en caso de error, comprobaremos la contraseña y el usuario.
- Consultar gastos de un cliente: devolverá un array o false en caso de error, comprobaremos la contraseña y el usuario.

#### Admin: 
- Agregar un cliente
- Eliminar un cliente

Caracteristicas:
- Evitaremos que se registren usuarios que ya existan
- Evitaremos eliminar usuarios que no existan
- Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
- Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola


### Paso 4 
- Creamos varios métodos para gestionar a los productos y sus necesidades
- Creamos 5 productos que estarán disponibles a la venta

Métodos:

- Consumir un producto (cliente): comprobaremos la contraseña y el usuarip, devolverá el producto o -1 en caso de no existir o estar agotado
    - Actualizaremos el stock
    - Actualizaremos el saldo del cliente
- Agregar un producto a la máquina (administración)
- Eliminar un productos de la máquina (administración)

Caracteristicas:

- Evitaremos agregar productos que ya existan
- Evitaremos eliminar productos que no existan
- Evitaremos agregar productos que no esten debidamente cumplimentados
- Protegeremos las funciones de agregar y eliminar productos con la contraseña ficticiaMola









