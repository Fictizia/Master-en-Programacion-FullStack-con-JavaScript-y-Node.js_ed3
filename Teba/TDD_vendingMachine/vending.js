// Métodos de la máquina expendedora


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
            if(match.length === 0){
                return false;
            } else {
                return true;
            }
        },
        addClient: function(client){
            let clientExists = false;
            clientes.forEach(elem => {
                if(elem.usuario === client.usuario){
                    clientExists = true;
                }
            }) 
            if(!clientExists){
                clientes.push(client)
            }
        },
        removeClient: function(user){
            clientes = clientes.filter(client => client.usuario !== user)
        }

    };
}


module.exports = { maquinaExpendedora }
