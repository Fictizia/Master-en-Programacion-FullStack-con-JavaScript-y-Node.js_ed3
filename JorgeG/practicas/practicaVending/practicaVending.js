
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
                price: 5
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
                price: 3
            }
            {
                name: 'sodas',
                code: 'A5',
                stock: 50,
                price: 2
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
                    time: null,
                    cash: null,
                    productName: null
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
                    customers.push(customer)
                    console.log ("new user created");
                }
        }
        
    }
    else {
        console.log ("wrong admin password");
    }   
}

// delete customer

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

// product's needs management methods

function consumeProduct (user, password, code){
    var i;
    for (i = 0; i < customers.length; i++)
        if (customers[i].user === user && customers[i].password === password ){
            var j;
            for (i = 0; i < products.length; i++){
                if (products[j].code === code){
                    customer[i].credit -= product[j].price;
                    customer[i].expenses.push({
                    time: new Date,
                    cash: products[j].price,
                    productName: products[j].name
                })
                    product[j].stock -= 1
                    console log (products[j].name + "sold")
                    break;
                    }
                else {
                console.log ("invalid product code")
                }
               }
            else {
            console.log ("wrong user or password")
            } 
        }                
}

// add new product

function addProduct (code, password)}
    if (password === admin.password){
        var productFound = false
        if (product.code.length > 0 && product.code)
            for (i = 0; i < product.length; i++ ){
                if (code === product[i].code)}
                    console.log("product code already exists")
                    }
                }
                else 
    }
}


