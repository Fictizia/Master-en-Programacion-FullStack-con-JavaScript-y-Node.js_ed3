### [Enunciado (Clase 11)](https://github.com/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3/blob/master/teoria/clase11.md)


```js

//object machine

var vendingMachine = {
    admin: null,
    customers: customers,
    products: products
};

//array products

var products = [{
                name: 'Snacks',
                code: 'A1',
                stock: 100,
                price: 5
            },
            {
                name: 'beverages',
                code: 'A2',
                stock: 50,
                price: 2
            },
            {
                name: 'sandwiches',
                code: 'A3',
                stock: 50,
                price: 10
            }
            ]
            

// array customers

var customers = [{
            name: 'Crispin',
            user: 'Cris',
            password: 'passwordCrispin',
            usertype: 'customer',
            credit: 100,
            expenses: [{
                    time: null,
                    cash: null,
                    product: null
                }]
            },
            {
            name: 'Benedict',
            user: 'Ben',
            password: 'passwordBenedict',
            usertype: 'customer',
            credit: 90,
            expenses: [{
                    time: null,
                    cash: null,
                    product: null
                }]
            },
            {
            name: 'Juniper',
            user: 'Joon',
            password: 'passwordJuniper',
            usertype: 'customer',
            credit: 80,
            expenses: [{
                    time: null,
                    cash: null,
                    product: null
                }]
            }];
            
// customer's needs management methods

function checkCredit(user, password){
    var i;
    for (i = 0; i < customers.length; i++){
        if (customers[i].user = user && customers[i].password = password){ 
            if (customers[i].credit >= 0){
                console.log (customers[i].credit);
                return customers[i].credit;
            }
            else {
            console.log (customers[i].name + "has no credit left");
            return -1;
            }
        }
        else {
            console.log ("wrong user or password");
            return -1;
        }
    }
}
    
```

### Notas...
