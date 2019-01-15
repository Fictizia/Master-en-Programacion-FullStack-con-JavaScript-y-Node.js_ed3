![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Máster en Programación FullStack con JavaScript y Node.js
### JS, Node.js, Frontend, Backend, Firebase, Express, Patrones, HTML5_APIs, Asincronía, Websockets, Testing

## Clase 8


### Números

**Propiedades**

- [Notación científica](https://es.wikipedia.org/wiki/Notaci%C3%B3n_cient%C3%ADfica)

- .MAX_VALUE() *El número más grande representable (1.7976931348623157e+308)*:
    ```javascript
       var numero1 = 1.7976931348623157e+308;
       var numero2 = 1.7976931348623157e+310;
       
       function verificarValorMaximo(num){
       
       	if (num <= Number.MAX_VALUE) {
       	  console.log("El número no es infinito");
       	} else {
       	  console.log("El número es infinito");
       	}
       	
       }
       
       verificarValorMaximo(numero1);
       verificarValorMaximo(numero2);    
    ```

- .MIN_VALUE() *El número más pequeño representable (5e-324)*:
    ```javascript
       var numero1 = 5e-323;
       var numero2 = 5e-326;
       
       function verificarValorMinimo(num){
       
       	if (num >= Number.MIN_VALUE) {
       	  console.log("El número no es infinito");
       	} else {
       	  console.log("El número es infinito");
       	}
       	
       }
       
       verificarValorMinimo(numero1);
       verificarValorMinimo(numero2);
    ```

- .NEGATIVE_INFINITY() *El valor negativo de la propiedad del objeto global Infinity*:
    ```javascript
        var numeroMinimo = (-Number.MAX_VALUE) * 2
        console.log(numeroMinimo);
        
        if (numeroMinimo === Number.NEGATIVE_INFINITY) {
         numeroMinimo = 0;
        }
        console.log(numeroMinimo);
    ```

- .NaN() *Not A Number*:
    ```javascript
        NaN === NaN;        // false
        Number.NaN === NaN; // false
        isNaN(NaN);         // true
        isNaN(Number.NaN);  // true    
    ```

- .POSITIVE_INFINITY() *Representa el infinito positivo*:
    ```javascript
        var numeroMaximo = Number.MAX_VALUE * 2
        console.log(numeroMaximo);
        
        if (numeroMaximo === Number.POSITIVE_INFINITY) {
         numeroMaximo = 0;
        }
        console.log(numeroMaximo);    
    ```

**Métodos:**

- .toExponential() *Devuelve una cadena con el valor número en formato de potencia*:
    ```javascript
        var numObj = 77.1234;
        
        console.log(numObj.toExponential());  // 7.71234e+1
        console.log(numObj.toExponential(4)); // 7.7123e+1
        console.log(numObj.toExponential(2)); // 7.71e+1
        console.log(77.1234.toExponential()); // 7.71234e+1   
    ```


- .toFixed() *Devulve un numero con decimales*:
    ```javascript
        var numObj = 12345.6789;
        
        numObj.toFixed();       //'12346' redondeo
        numObj.toFixed(1);      //'12345.7'
        numObj.toFixed(6);      //'12345.678900' Se añaden ceros en caso necesario
        (1.23e+20).toFixed(2);  //'123000000000000000000.00'
        (0).toFixed(2);         //'0.00'
        2.34.toFixed(1);        //'2.3' redondeo
        -2.34.toFixed(1);       //-2.3 Numeros negativos no son devueltos como cadenas.
        (-2.34).toFixed(1);     //'-2.3' En caso de usar paréntesis se salta la limitación 
    ```


- .toLocaleString() *Devulve una cadena con el valor numeral representado en lenguaje local*:
    ```javascript
        var numero = 3500;
        // En Local
        console.log(numero.toLocaleString()); // 3.500
        // En Árabe
        console.log(numero.toLocaleString('ar-EG')); // ٣٬٥٠٠
        // En Chino decimal
        console.log(numero.toLocaleString('zh-Hans-CN-u-nu-hanidec')); // 三,五〇〇
    ```


- .toPrecision() *Devuelve un numero precisado*:
    ```javascript
        var numero = 5.123456;
        
        console.log(numero.toPrecision());    // 5.123456
        console.log(numero.toPrecision(5));   // 5.1235
        console.log(numero.toPrecision(2));   // 5.1
        console.log(numero.toPrecision(1));   // 5
        console.log((1234.5).toPrecision(2)); // 1.2e+3 (En ocasiones )
    ```



- .toString() *Devuelve una cadena con el número en la base que determinemos*:
    ```javascript
        console.log((17).toString());     // '17'
        console.log((17.2).toString());   // '17.2'
        console.log((-0xff).toString(2)); // '-11111111'
        console.log((254).toString(16));  // 'fe'
    ```
 
- .parseFloat() *Devuelve un número décimal partiendo de una cadena*:
    ```javascript
        Number.parseFloat("3.14"); // 3.14
        Number.parseFloat("314e-2"); // 3.14
        Number.parseFloat("0.0314E+2"); // 3.14
        Number.parseFloat("3.14textos..."); // 3.14
        Number.parseFloat("1textos..."); //1
    ```
    
- .parseInt() *Devuelve un número entero en una base especifica o en base 10 partiendo de una cadena*:
    ```javascript
        parseInt(" 0xF", 16); // 15
        parseInt(" F", 16);  // 15
        parseInt("17", 8);  // 15
        parseInt(021, 8);  // 15
        parseInt("015", 10);  // 15
        parseInt(15.99, 10);  // 15
        parseInt("15,123", 10);  // 15
        parseInt("FXX123", 16);  // 15
        parseInt("1111", 2);  // 15
        parseInt("15*3", 10);  // 15
        parseInt("15e2", 10);  // 15
        parseInt("15px", 10);  // 15
        parseInt("12", 13);  // 15
    ```


- [Comparativas de rendimeinto interesantes](https://jsperf.com/math-floor-vs-math-round-vs-parseint/74)

### Math

**Métodos:**

- .random() *Devuelve un número aleatorio*
    ```javascript
        // Número aleatorio entre 0 (incluido) y 1 (excluido)
        Math.random(); 
        
        // Retorna un número aleatorio entre min (incluido) y max (excluido)
        Math.random() * (max - min) + min;
        Math.random() * (11 - 0) + 0;
        
        // Retorna un entero aleatorio entre min (incluido) y max (excluido)
        Math.floor(Math.random() * (11 - 0)) + 0;
    ```

- .round() *Devuelve el valor de un número redondeado al entero más cercano*
    ```javascript
        Math.round(20.5); // 21
        Math.round(20.49); // 20
        Math.round(-20.51); // -21
    ```

- .Floor() *Devuelve el máximo entero menor o igual a un número.*
    ```javascript
        Math.floor(20.5); // 21
        Math.floor(20.49); // 20
        Math.floor(-20.51); // -21
    ```
- .max() *retorna el mayor de cero o más números*
    ```javascript
        Math.max(valor1, valor2, valor3);
    ```
- .min() *retorna el menor de cero o más números*
    ```javascript
        Math.min(valor1, valor2, valor3);
    ```    

**Librerías:**
- [Mathjs](http://mathjs.org/)

### Ejercicios

**1 -** Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

```javascript
    function azarMoneda() {

        var valor = Math.floor((Math.random() * 2) + 1);

        if (valor === 1){
            console.info("Ha salido Cara!!");
        } else {
            console.info("Ha salido Cruz!");
        }

    }
```

**2 -** Diseña un algoritmo que  simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

```javascript
    function azarDados() {

        var coincidencias = 0;

        for (var i = 0; i < 100; i++) {

            var dado1 = Math.floor((Math.random() * 6) + 1);
            var dado2 = Math.floor((Math.random() * 6) + 1);
            var tirada = dado1 + dado2;

            if (tirada === 10) {
                coincidencias++;
            }
        };

        console.info("El azar ... sumó 10 un total de " +coincidencias+ " veces")

    }
```

### Dates

**Librerías:**
- [Dates.js](http://www.datejs.com/)
- [Momments.js](http://momentjs.com/timezone/)
- [JQuery timeAgo](http://timeago.yarp.com/)
- [Livestamp.js](https://mattbradley.github.io/livestampjs/)

**Metodos**

- Creando Fechas:
    - Fecha Actual:
    ```javascript
        var ahora = new Date();
        console.log(ahora);
    ```
    - Usando milisegundos (desde el 1/1/1970 00:00):
    ```javascript
        var diaDespues = new Date(3600*24*1000);
        console.log(diaDespues);
    ```
    - Usando cadenas de texto:
    ```javascript
        var newYear = new Date("January 1, 2016 00:00:00");
    ```
    - Usando números:
    ```javascript
        var newYear = new Date(2016, 1, 1); // AAAA, MM, DD
        var newYear = new Date(2016, 1, 1, 0, 0, 0); // AAAA, MM, DD, HH, MM, SS
    ```
    - Usando UTC:
    ```javascript
        var newYear = new Date(Date.UTC(2016, 1, 1));
    ```

- Getters:
    - Local
    ```javascript
        var ahora = new Date();
        console.log("La fecha es " + ahora);
        console.log("==== FECHA ====");
        console.log("El año: " + ahora.getFullYear()); // 4 digitos
        console.log("El mes: " + ahora.getMonth()); // 0 - 11
        console.log("El día de la semana: " + ahora.getDay()); // 0 - 6 (D - S)
        console.log("El día del mes: " + ahora.getDate()); // 1-31
        console.log("==== HORA ====");
        console.log("Horas: " + ahora.getHours());
        console.log("Minutos: " + ahora.getMinutes());
        console.log("Segundos: " + ahora.getSeconds());
        console.log("Milisegundos desde 1/1/1970: "+ ahora.getTime());
        console.log("milisegundos: " + ahora.getMilliseconds());
    ```
    - UTC
    ```javascript
        var ahora = new Date();
        console.log("Con UTC: ";
        console.log("==== FECHA ====");
        console.log("El año: " + ahora.getUTCFullYear()); // 4 digitos
        console.log("El mes: " + ahora.getUTCMonth()); // 0 - 11
        console.log("El día de la semana: " + ahora.getUTCDay()); // 0 - 6 (D - S)
        console.log("El día del mes: " + ahora.getUTCDate()); // 1-31
        console.log("==== HORA ====");
        console.log("Horas: " + ahora.getUTCHours());
        console.log("Minutos: " + ahora.getUTCMinutes());
        console.log("Segundos: " + ahora.getUTCSeconds());
        console.log("milisegundos: " + ahora.getUTCMilliseconds());
    ```

- Setters:
    - Local
    ```javascript
        var newYear = new Date(Date.UTC(2016, 1, 1));
        console.info("La fecha es " + newYear);
        
        newYear.setFullYear(1980); // Pasamos a 1980
        console.info("La fecha es " + newYear);
        
        newYear.setDate(56); // 1 Enero + 56 Días
        console.info("La fecha es " + newYear);
        
        newYear.setUTCMilliseconds(1500); // 1500ms en formato UTC
        console.info("La fecha es " + newYear);
        
        newYear.setUTCHours(36); // le sumamos 36 horas
        console.info("La fecha es " + newYear);
        
        newYear.setMonth(-6); // le quitamos 6 meses
        console.info("La fecha es " + newYear);
    ```

- Otros:
    -.getTimezoneOffset() *Devuelve la diferencia entre tu zona horaria y UTC (en minutos)*
    ```javascript
        ahora.getTimezoneOffset();
    ```
    -.toString(), .toDateString(), .toTimeString() *Devuelve una cadena con la fecha*
    ```javascript
        ahora.toString(); // Fecha y Hora
        ahora.toDateString(); // Solo Fecha
        ahora.toTimeString(); // Solo Hora
    ```
    -.toUTCString(), .toISOString() *Devuelve una cadena con la fecha en formatos específicos*
    ```javascript
        ahora.toISOString(); // UTC
        ahora.toUTCString(); // ISO
    ```
    -..toLocaleString() *Devuelve una cadena con la fecha en version local.*
    ```javascript
        
        var ahora = new Date();
        console.info(ahora.toLocaleString());
        
        // Código de idioma IETF para Alemán
        console.info(ahora.toLocaleString("de-DE"));
        
        // Opciones Avanzadas para fechas
        var opciones = { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'};
        console.log(ahora.toLocaleString("de-DE", opciones));
    ```
    -.getTimezoneOffset() *Devuelve la diferencia entre tu zona horaria y UTC (en minutos)*
    ```javascript
        ahora.getTimezoneOffset();
    ```
    - Tiempo transcurrido:
    ```javascript
        var inicio = new Date();
        // + código
        var fin = new Date();
        var transcurso = fin.getTime() - inicio.getTime();
        console.info("Pasaron "+transcurso+"ms");
    ```
### Ejercicios

**3 -** `Nivel Medio` :spades: Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año) usando una función.
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)

- Solución 1:
```javascript

	// Opcion 1
	function verificadorDeFechas (day, month, year) {
		// Opcion 1
		var fecha = new Date(year, month-1, day);

		if (fecha.getFullYear() === year){
			var opciones = { 
			    weekday: 'long',
			    year: 'numeric', 
			    month: 'long', 
			    day: 'numeric'
			};
			var fechaFormato = fecha.getDate() + "/" + (fecha.getMonth()+1) +"/"+ fecha.getFullYear(); 
			
			console.info("La fecha es correcta", fechaFormato);
			console.info("La fecha en otro formato: ", fecha.toLocaleString("es-ES", opciones));
 
		} else {
			console.warn("Error! los datos no son correctos!");			
		}
	}
```

- Solución 2:
```javascript

	function verificadorDeFechas (day, month, year) {
		var fechaDetalle,
		fecha = day + "/" + month + "/" + year;

		if(day <= 31 && day > 0 && month <=12 && month > 0 && year >= 0){
			console.info("La fecha es correcta", fecha);

			switch (month) {
				case 1:
					fechaDetalle = day + " de Enero de " + year;
					break;
				case 2:
					fechaDetalle = day + " de Febrero de " + year;
					break;
				case 3:
					fechaDetalle = day + " de Marzo de " + year;
					break;
				case 4:
					fechaDetalle = day + " de Abril de " + year;
					break;
				case 5:
					fechaDetalle = day + " de Mayo de " + year;
					break;
				case 6:
					fechaDetalle = day + " de Junio de " + year;
					break;
				case 7:
					fechaDetalle = day + " de Julio de " + year;
					break;
				case 8:
					fechaDetalle = day + " de Agosto de " + year;
					break;
				case 9:
					fechaDetalle = day + " de Septiembre de " + year;
					break;
				case 10:
					fechaDetalle = day + " de Octubre de " + year;
					break;
				case 11:
					fechaDetalle = day + " de Noviembre de " + year;
					break;
				case 12:
					fechaDetalle = day + " de Diciembre de " + year;
					break;
			}

			console.info("La fecha en otro formato: ", fechaDetalle);

		} else {
			console.warn("Error! los datos no son correctos!");
		}

	}
```

### `Nivel Avanzado` :diamonds: El truco de las fechas

Usar getters para modificar fechas (días, meses, etc...)

Nota: Partiendo del ejemplo de [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate)

- sin *getters*
```javascript
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.toLocaleString(); // 6/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(24);
	theBigDay.toLocaleString() // 23/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(32);
	theBigDay.toLocaleString() // 31/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(22);
	theBigDay.toLocaleString() // 21/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(22 + 32 +24);
	theBigDay.toLocaleString() // 15/9/1962 23:00:00
```

- con *getters* 
```javascript
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.toLocaleString(); // 6/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 24);  
	theBigDay.toLocaleString(); // 30/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 32);
	theBigDay.toLocaleString(); // 7/8/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 22);
	theBigDay.toLocaleString(); // 28/7/1962 23:00:00
	
	var theBigDay = new Date(1962, 6, 7);
	theBigDay.setDate(theBigDay.getDate() + 22 + 32 + 24);
	theBigDay.toLocaleString(); // 22/9/1962 23:00:00
```

### Ejercicios

**4 -** ¿Que fecha será dentro de 30 días?
```javascript
    // Tu solución
```

**5 -** ¿Cuantas horas han pasado desde que emepezó este master? y... ¿en días?
```javascript
    // Tu solución
```

**6 -** ¿Cuantos milisengundos quedan para terminar el master? y... ¿en horas o días?
```javascript
    // Tu solución
```

**7 -** ¿Que fecha será dentro de un año y 10 horas más?
```javascript
    // Tu solución
```

**8 -** Imprimir por consola la fecha completa (formato texto) en koreano y japones.
```javascript
    // Tu solución
```