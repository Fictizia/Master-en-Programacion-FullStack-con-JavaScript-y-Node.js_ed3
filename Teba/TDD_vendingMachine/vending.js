// Métodos de la máquina expendedora


function maquinaExpendedora(clientes, productos){
    // Aquí se ponen todos los métodos
    return { 
        admin: {
            secreto: "ficticiaMola"
        },
        addClient: function(client){ 
            clientes.push(client)
        },
        removeClient: function(client){

        }

    };
}



module.exports = { maquinaExpendedora }
