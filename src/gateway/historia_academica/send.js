const amqp = require("amqplib/callback_api")
const queue = 'actualizarHA';
export function send(id, idCarrera, asignaturas){
    var asgt = JSON.stringify({
        idEstudiante: id,
        idCarrera: idCarrera,
        asignaturas: asignaturas
    });
    amqp.connect('amqp://siamAdmin:SiamAdmin123@localhost:5672', function(error0, connection) {
        if(error0){
            console.log("error en la conexion")
            console.log(error0);
            return({msg:'error en la conexion'})
        }
        else{
            try{    
                connection.createChannel(function(error1,channel){
                    if (error1){
                        console.log("error en el canal")
                        console.log(error1);
                        return({msg:'Error en el canal'});
                    }
                    channel.assertQueue(queue,{
                        durable: true
                    })
                    channel.sendToQueue(queue, Buffer.from(asgt));
                    
                });
                setTimeout(function() {
                    connection.close();
                    }, 500);
            }catch(err){
                console.log("error!!!!")
                console.log(err);
                return({msg:'Error en el envio a la cola'});
            }
        }
    });
    return({msg:'Peticion enviada'});
}
