## Ejercicios

#### 1 - Realiza una pagina web que muestre la cuenta atrás para terminar el master en días, horas, minutos y segundos. 

Objetivos Adicionales:
- Además debería de seguir actualizando la cuenta atrás de manera dinámica.
- Los datos horarios siempre deben mostrarse con dos dígitos, añadiendo un cero a la izquierda cuando sea necesario.

```js
const fechaDeseada = new Date (2019, 6, 15, 22, 0, 0);

function cuentaAtras(ms){
    const days = zeroStart(Math.floor(ms / (24*60*60*1000)));
    const daysms= ms % (24*60*60*1000);
    const hours = zeroStart(Math.floor((daysms)/(60*60*1000)));
    const hoursms= ms % (60*60*1000);
    const minutes = zeroStart(Math.floor((hoursms)/(60*1000)));
    const minutesms = ms % (60*1000);
    const sec = zeroStart(Math.floor((minutesms)/(1000)));

    document.body.innerHTML = `Faltan ${days} días ${hours}:${minutes}:${sec}`;
}

function zeroStart (num) {
    const str = num.toString();
    return str.padStart(2, '0');
}

setInterval(function(){
    const fechaRef = new Date();
    const tiempoRest = fechaDeseada - fechaRef;
    cuentaAtras(tiempoRest);
}, 1000);

```
