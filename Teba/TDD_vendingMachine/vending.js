// Métodos de la máquina expendedora

function UserError(msg) {
    this.msg = msg;
 }


function maquinaExpendedora(config={},clientes, productos){
    // Aquí se ponen todos los métodos
    return { 
        admin: {
            secreto: config.adminSecret
        },
        getAllClients: function () {
            return clientes
        },
        isClient: function(userName){
            const match = clientes.filter(client => client.usuario === userName)
            return match.length !== 0;
        },
        addClient: function(client){
            if(!client.usuario){
                throw new Error("Missing Client Info!");
            }
            if(!this.isClient(client.usuario)){
                clientes.push(client)
            }
        },
        removeClient: function(user){
            if(!this.isClient(user)){
                return false
            }
            clientes = clientes.filter(client => client.usuario !== user)
            return true
        }

    };
}

module.exports = { maquinaExpendedora }