Práctica 1 - Diseña un script para gestionar por consola una máquina expendedora

Características:

Solo los usuarios registrados pueden usar la máquina
El sistema funciona sin dinero real, en su lugar se usa un sistema de puntos
Los usuarios disponen de unos puntos para gastar en la máquina que el departamento de personal asigna.
La maquina no concederá creditos, solo trabaja en base a los puntos disponibles.
Para agilizar la reposición de lo consumido... la maquina debe controlar en stock

Paso 1 - Creamos los primeros objetos básicos:

Maquina Expendedora (Objeto)
Productos (Array)
Clientes (Array)

```
var MáquinaExpendedora = {
  admin: { password: 'fictiziamola' },
  clientes: [],
  productos: []
};
```

Paso 2 - Creamos los primeros perfiles en el Array de clientes:

Propiedades:
Nombre
Usuario
Contraseña
Tipo usuario
Presupuesto

```
var clients = [
  {
    nombre: 'Fabiola',
    usuario: 'fab',
    password: 'pass123',
    tipoUsuario: 'client',
    credito: 5,
    gastos: [
      {
        credito: '',
        fecha: '',
        producto: ''
      }
    ]
  },
  {
    nombre: 'Karla',
    usuario: 'kar',
    password: 'pass456',
    tipoUsuario: 'client',
    credito: '',
    gastos: []
  }
];
```

Paso 3 - Creamos varios métodos para gestionar a los clientes y sus necesidades

Metodos:

- Consultar saldo de un cliente
  - Comprobaremos la contraseña y el usuario
  - Devolverá el saldo existente o -1 en caso de error
- Consultar gastos de un cliente
  - Devolverá un array o false en caso de error
  - Comprobaremos la contraseña y el usuario
- Agregar un cliente
- Eliminar un cliente

Caracteristicas:

- Evitaremos que se registren usuarios que ya existan
- Evitaremos eliminar usuarios que no existan
- Evitaremos dar de alta usuarios que no esten - debidamente cumplimentados
- Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola

```
Proceso consultarSaldoCliente
@param clientActual - string
@param password - string
@returns credit
Si (clientActual === cliente y credito >= 0) Entonces
  (pinta credito)
Sino (pinta no tienes saldo)
Fin Si

Proceso consultarGastos
@params clientActual string
@returns gastos array
Si (clientActual existe y gastos existe) Entonces
  (pinta gastos)
Sino (no tienes gatos, tienes pastuki para gastar!)
Fin Si

Proceso agregarCliente
@params clientActual objeto
@returns mensaje usuario creado
Si (clientActual existe) Entonces
  pintar (ya tienes una cuenta)
Sino (clientActual)
  Si (nombre existe y usuario existe y contraseña existe) Entonces
    (agregar objeto de usuario al array de clientes y pintar cuenta creada)
Fin Si

Proceso eliminarClinete
@params clientActual objeto
@params password admin string
@returns mensaje
Si (password === fictiziamola) Entonces
  Si (clientActual existe) Entonces
    (borrar el objeto del cliente del array de clientes y mensaje cuenta eliminada)
Fin si
```

Paso 4 - Creamos varios métodos para gestionar a los productos y sus necesidades

    Creamos 5 productos que estarán disponibles a la venta

    Métodos:
        Consumir un producto (cliente)
            Comprobaremos la contraseña y el usuario
            Devolverá el producto o -1 en caso de no existir o estar agotado
            Actualizaremos el stock
            Actualizaremos el saldo del cliente
        Agregar un producto a la máquina (administración)
        Eliminar un prodcutos de la máquina (administración)

    Caracteristicas:
        Evitaremos agregar productos que ya existan
        Evitaremos eliminar productos que no existan
        Evitaremos agregar productos que no esten debidamente cumplimentados
        Protegeremos las funciones de agregar y eliminar productos con la contraseña ficticiaMola

```
Consumir producto
@params usuarioActual y contraseñaActual
@returns productoElegido
Si (usuarioActual === usuario y contraseñaActual === contraseña) entonces
  si (productoElegido === productoMaquina y créditoUsuario > precioProductoMaquina)
    entonces devolver productoMaquina y créditoUsuario -= 1 y stock -= 1
fin

Agregar producto a la máquina
@params password admin
si (password === fictiziamola) entonces
    stock += 1
fin

Elinar producto
@params admin password
si (password === fictiziamola) entonces
  si (producto existe) entonces
    borrar producto
fin
```

Paso 5 - (Nivel Medio ♠️) Ahora podemos agregar los métodos para agregar, retirar y resetear saldo de los usuarios.

    Importante:
        Los saldos jamas pueden ser negativos.

```
resetCredit
@params admin password
@params admin acción(add, subtract, reset)
@params admin cantidad
@returns credit
Si (password === fictizimola) Entonces
  Según acción Hacer
    caso add:
      créditoUsuario += cantidad
    caso subtract:
      créditoUsuario -= cantidad
      Si créditoUsuario <= 0 Entonces
        créditoUsuario = 0
      Fin si
    caso reset:
      créditoUsuario = 0
    De otro modo:
      imprime Caso no encontrado
  Fin Según
Fin Si
```

Paso 6 - (Nivel Avanzado ♦️) Ahora podemos agregar el método para saber la disponibilidad de stock

    Importante:
        Es necesaria clave (adminsitrador)
        Debemos saber las existencias
        Debemos saber que productos estan disponibles y cuales no.
        Debemos incluir el código y el nombre
        Cuando se imprima el informe... es necesario incluir la fecha.

## /\*

## Ejemplo de Informe

---

## En total tenemos 6 productos

Nombre: Risketos
Código: C1
Stock: 100
Disponibilidad: true

---

Nombre: KitKat
Código: C2
Stock: 4
Disponibilidad: true

---

Nombre: Chicles Orbit
Código: C3
Stock: 6
Disponibilidad: true

---

Nombre: Pipas Solero
Código: C4
Stock: 1
Disponibilidad: true

---

Nombre: Demonios de Fresa
Código: C5
Stock: 10
Disponibilidad: true

---

Nombre: Chetos
Código: C6
Stock: 5
Disponibilidad: true

---

\*/

```
@params admin password
@returns stock
Si(password === fictiziamola) entonces
  Si(disponibilidad = true) entonces
    Imprimir producto, código, stock,disponibilidad
  Sino Imprimir producto no disponible,
  producto, código, stock,disponibilidad
  Imprimir fecha de hoy
Fin Si
```
