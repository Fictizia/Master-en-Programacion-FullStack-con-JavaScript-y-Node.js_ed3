let vendingMachine = {
  admin: { password: 'fictiziamola' },
  products: [{
      name: 'Risketos',
      code: 'C1',
      stock: 100,
      available: true
    },
    {
      name: 'KitKat',
      code: 'C2',
      stock: 0,
      available: true,
      price: 2
    },
    {
      name: 'Chicles Orbit',
      code: 'C3',
      stock: 6,
      available: true
    },
    {
      name: 'Pipas Solero',
      code: 'C4',
      stock: 1,
      available: true
    }
  ],
  clients: [{
      name: 'Fabiola',
      user: 'fab',
      password: 'pass123',
      role: 'client',
      credit: 5,
      expenses: [{
          price: 2,
          timestamp: '2018-11-01T12:08:18.835Z',
          product: 'Chetos'
        },
        {
          price: 2,
          timestamp: '2018-11-01T12:12:12.273Z',
          product: 'Pipas Solero'
        },
        {
          price: 2,
          timestamp: '2018-11-01T12:19:08.511Z',
          product: 'KitKat'
        }
      ]
    },
    {
      name: 'Guillermo',
      user: 'guille',
      password: 'pass234',
      role: 'client',
      credit: 5,
      expenses: []
    },
    {
      name: 'Karina',
      user: 'kari',
      password: 'pass345',
      role: 'client',
      credit: 5,
      expenses: []
    },
    {
      name: 'Ulises',
      user: 'uli',
      password: 'pass678',
      role: 'client',
      credit: 5,
      expenses: []
    }
  ],
  checkCredit: function (currentClient, password) {
    for (let i = 0; i < vendingMachine.clients.length; i++) {
      if (
        vendingMachine.clients[i].user === currentClient &&
        vendingMachine.clients[i].password === password
      ) {
        console.log(
          vendingMachine.clients[i].name,
          'Your balance is: ',
          vendingMachine.clients[i].credit
        );
        break;
      }
      else if (
        vendingMachine.clients[i].user === currentClient &&
        vendingMachine.clients[i].password !== password
      ) {
        console.log('Your password is not correct');
      }
    }
  },
  checkExpenses: function (currentClient, password) {
    for (let i = 0; i < vendingMachine.clients.length; i++) {
      if (
        vendingMachine.clients[i].user === currentClient &&
        vendingMachine.clients[i].password === password
      ) {
        if (vendingMachine.clients[i].expenses.length > 0) {
          console.log(`Your expenses are:\n====================`);
          for (let j = 0; j < vendingMachine.clients[i].expenses.length; j++) {
            let date = new Date(
              vendingMachine.clients[i].expenses[i].timestamp
            );
            let formatedDate = date.toLocaleDateString();
            let formatedTime = date.toLocaleTimeString();
            let product = vendingMachine.clients[i].expenses[j].product;
            let price = vendingMachine.clients[i].expenses[j].price;
            console.log(
              `\nDate: ${formatedDate}\nTime: ${formatedTime}\nProduct: ${product}\nPrice: ${price}\n====================`
            );
          }
        }
        else {
          console.log('You do not have expenses');
        }
      }
    }
  },
  addClient: function (newClient, password) {
    let exists = false;
    if (password === vendingMachine.admin.password) {
      for (let i = 0; i < vendingMachine.clients.length; i++) {
        if (
          newClient.name === vendingMachine.clients[i].name &&
          newClient.user === vendingMachine.clients[i].user &&
          newClient.password === vendingMachine.clients[i].password
        ) {
          exists = true;
        }
      }
      if (exists === false) {
        vendingMachine.clients.push(newClient);
        console.log(
          'Client: ',
          newClient.name,
          ' has been added',
          vendingMachine.clients
        );
      }
      else if (exists === true) {
        console.log('That client already exists.', vendingMachine.clients);
      }
    }
  },
  deleteClient: function (clientToDelete, password) {
    if (password === vendingMachine.admin.password) {
      for (let i = 0; i < vendingMachine.clients.length; i++) {
        if (
          clientToDelete.name === vendingMachine.clients[i].name &&
          clientToDelete.user === vendingMachine.clients[i].user &&
          clientToDelete.password === vendingMachine.clients[i].password
        ) {
          vendingMachine.clients.splice(i, 1);
          console.log(i, vendingMachine.clients);
          break;
        }
      }
    }
  },
  buyProduct: function (currentUser, password, selectedProduct) {
    let currentUserCredit;
    let user;
    for (let i = 0; i < vendingMachine.clients.length; i++) {
      if (
        currentUser === vendingMachine.clients[i].user &&
        password === vendingMachine.clients[i].password
      ) {
        currentUserCredit = vendingMachine.clients[i].credit;
        user = vendingMachine.clients[i].user;
        break;
      }
    }
    for (let j = 0; j < vendingMachine.products.length; j++) {
      if (
        selectedProduct === vendingMachine.products[j].name &&
        currentUserCredit > 0
      ) {
        if (vendingMachine.products[j].stock <= 0) {
          console.log('We do not have that product, select another one');
          vendingMachine.products[j].available = false;
        }
        else {
          vendingMachine.products[j].stock -= 1;
          currentUserCredit -= vendingMachine.products[j].price;
          user.expenses.push({
            price: vendingMachine.products[j].price,
            timestamp: new Date(),
            product: vendingMachine.products[j].name
          });

          console.log(vendingMachine.products[j].name);
        }
      }
    }
  },
  increaseProductStock: function (password, quantity) {
    if (password === vendingMachine.admin.password) {
      for (let i = 0; i < vendingMachine.products.length; i++) {
        if (vendingMachine.products[i].stock < 10) {
          vendingMachine.products[i].stock += quantity;
          console.log(
            vendingMachine.products[i].name,
            vendingMachine.products[i].stock
          );
        }
      }
    }
  },
  addProduct: function (password, newProduct) {
    if (
      password === vendingMachine.admin.password &&
      vendingMachine.products.length < 5
    ) {
      let productExists = vendingMachine.products.find(function (product) {
        return product.name === newProduct.name;
      });
      if (productExists) {
        console.log('Product already exists');
      }
      else {
        vendingMachine.products.push(newProduct);
        console.log(vendingMachine.products);
      }
    }
  },
  deleteProduct: function (password, product) {
    if (password === vendingMachine.admin.password) {
      for (let i = 0; i < vendingMachine.products.length; i++) {
        if (vendingMachine.products[i].name === product) {
          vendingMachine.products.splice(i, 1);
          console.log(vendingMachine.products);
        }
      }
    }
  },
  manageClientCredit: function (user, password, action, quantity) {
    let currentUser = vendingMachine.clients.find(function (client) {
      return client.user === user;
    });
    if (password === vendingMachine.admin.password && currentUser) {
      switch (action) {
      case 'addCredit':
        currentUser.credit += quantity;
        console.log(`Added ${quantity} to ${currentUser.name} credit`);
        console.log(`${currentUser.name} credit is ${currentUser.credit}`);
        break;
      case 'subtractCredit':
        currentUser.credit -= quantity;
        if (currentUser.credit <= 0) {
          currentUser.credit = 0;
        }
        console.log(`Subtracted ${quantity} from ${currentUser.name} credit`);
        console.log(`${currentUser.name} credit is ${currentUser.credit}`);
        break;
      case 'resetCredit':
        currentUser.credit = 0;
        console.log(`Reset ${currentUser.name} credit`);
        console.log(`${currentUser.name} credit is ${currentUser.credit}`);
        break;
      default:
        console.log(`Action: ${action} not found`);
        break;
      }
    }
  },
  viewStock: function (password) {
    if (password === vendingMachine.admin.password) {
      let date = new Date();
      let formatedDate = date.toLocaleDateString();
      let formatedTime = date.toLocaleTimeString();
      console.log(`Report date: ${formatedDate} ${formatedTime}\n________`);
      vendingMachine.products.forEach(function (product) {
        console.log(
          `\nName: ${product.name} \nCode: ${product.code} \nStock: ${
            product.stock
          } \nAvailable: ${product.available}\n__________`
        );
      });
    }
  }
};

vendingMachine.checkCredit('guille', 'pass234');
vendingMachine.checkExpenses('fab', 'pass123');
vendingMachine.addClient({
    name: 'Teba',
    user: 'teb',
    password: 'pass890',
    role: 'client',
    credit: '5',
    expenses: []
  },
  'fictiziamola'
);
vendingMachine.deleteClient({
    name: 'Guillermo',
    user: 'guille',
    password: 'pass234',
    role: 'client',
    credit: '5',
    expenses: []
  },
  'fictiziamola'
);

vendingMachine.buyProduct('fab', 'pass123', 'KitKat');
vendingMachine.increaseProductStock('fictiziamola', 20);
vendingMachine.addProduct('fictiziamola', {
  name: 'Nachos',
  code: 'C6',
  stock: 10,
  available: true
});
vendingMachine.deleteProduct('fictiziamola', 'Pipas Solero');
vendingMachine.manageClientCredit('fictiziamola');
vendingMachine.manageClientCredit('fab', 'fictiziamola', 'resetCredit', 10);
vendingMachine.viewStock('fictiziamola');

console.assert(
  typeof vendingMachine.clients[0].name === typeof '',
  'Name is not a string'
);
console.assert(
  vendingMachine.clients[0].name.length < 0,
  'Name does not exists'
);
console.assert(
  typeof vendingMachine.clients[0].user === typeof '',
  'Name is not a string'
);
console.assert(
  typeof vendingMachine.clients[0].password === typeof '',
  'Name is not a string'
);
console.assert(
  typeof vendingMachine.clients[0].credit === typeof 3,
  'Credit is not type number'
);
console.assert(
  typeof vendingMachine.clients[0] === typeof {},
  'Client is not an object'
);
console.assert(
  typeof vendingMachine.products[0] === typeof {},
  'Client is not an object'
);
console.assert(
  vendingMachine.admin.password === 'fictiziamola',
  'That is not the admin password'
);
