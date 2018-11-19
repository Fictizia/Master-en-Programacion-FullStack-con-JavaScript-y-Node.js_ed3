### [Enunciado (Clase 11)](https://github.com/Fictizia/Master-en-Programacion-FullStack-con-JavaScript-y-Node.js_ed3/blob/master/teoria/clase11.md)


```js

//object machine

var vendingMachine = {
    admin: null,
    customers: customers,
    products: products
};

var admin = {
    name: admin,
    password : fictiziaMola
}

//array products

var products = [{
                name: 'crisps',
                code: 'A1',
                stock: 50,
                price: 5
            },
            {
                name: 'biscuits',
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
            {
                name: 'juices',
                code: 'A4',
                stock: 50,
                price: 10
            }
            {
                name: 'sodas',
                code: 'A5',
                stock: 50,
                price: 10
            }
            ]
            

// array customers

var customers = [{
            name: 'Crispin',
            user: 'Cris',
            password: 'passwordCrispin',
            credit: 100,
            expenses: [{
                    time: null,
                    cash: null,
                    productName: null
                }]
            },
            {
            name: 'Benedict',
            user: 'Ben',
            password: 'passwordBenedict',
            credit: 90,
            expenses: [{
                    time: null,
                    cash: null,
                    productName: null
                }]
            },
            {
            name: 'Juniper',
            user: 'Joon',
            password: 'passwordJuniper',
            credit: 80,
            expenses: [{
                    time: 20181117,
                    cash: 10,
                    productName: 'sandwiches'
                }]
            }];
            
// customer's needs management methods

function checkCredit(user, password){
    var i;
    for (i = 0; i < customers.length; i++){
        if (customers[i].user === user && customers[i].password === password){ 
            if (customers[i].credit >= 0){
                console.log (customers[i].credit);
                return customers[i].credit;
            }
            else {
            console.log (customers[i].name + "has no credit left");
            return -1;
            }
        }
    }
    console.log ("wrong user or password");
            return -1;
}

function checkExpenses(user, password){
    var i;
    for (i = 0; i < customers.length; i++){
        if (customers[i].user === user && customers[i].password === password){
            if (customers[i].expenses.length > 0){
                console.log (customers[i].expenses + "has expensed");
                console.log (customers[i].expenses);
                return customers[i].expenses;
            }
            else{
                console.log (customers[i].name + "has no expenses");
                return false;
            }
        }
        
    }
    console.log ("wrong user or password");
    return false;
}


// add customer
    
function addCustomer (customer, password){
    if (password === admin.password){
        var customerFound = false;
        if ((customer.name != null && customer.name != undefined && customer.name != "") &&
            (customer.password != null && customer.password != undefined && customer.pasword != "") &&
            (customer.user != null && customer.user != undefined && customer.user != "")){
                var i;
                for (i = 0; i < customers.length; i++){ 
                    if (customer.user === customer[i].user){
                        customerFound = true;
                    }
                }
                if (customerFound === true) {
                    console.log ("User already exists");
                }
                else {
                    customers.push(customer);
                }
        }
        
    }
    else {
        console.log ("wrong admin password");
    }   
}

function deleteCustomer (user, password) {
    if (password === admin.password){
    var customerFound = false;
        for (i = 0; i < customers.length; i++){ 
            if (customers.user === customer[i].user){
                customerFound = true
                customers.splice(i, 1);
                break;
            }
        }
        if (customerFound === true) {
            console.log ("user deleted")
        }
        else if (cunstomerFound === false) {
            console.log ("user not found")
        }
    }
}


```

### Notas...
