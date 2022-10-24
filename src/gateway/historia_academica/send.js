const amqp = require("amqplib/callback_api")
const queue = 'actualizarHA';
export function send(id, idCarrera, asignaturas){
    var asgt = JSON.stringify({
        idEstudiante: id,
        idCarrera: idCarrera,
        asignaturas: asignaturas
    });
    var msg = " ";
    amqp.connect('amqp://siamAdmin:SiamAdmin123@localhost:5672', function(error0, connection) {
        if(error0){
            console.log("error en la conexion")
            console.log(error0);
            msg = "error"
        }
        else{
            try{    
                connection.createChannel(function(error1,channel){
                    if (error1){
                        console.log("error en el canal")
                        console.log(error1);
                    }
                    channel.assertQueue(queue,{
                        durable: false
                    })
                    channel.sendToQueue(queue, Buffer.from(asgt));
                    
                });
                
                msg = "exito"
                setTimeout(function() {
                    connection.close();
                    }, 500);
            }catch(err){
                console.log("error!!!!")
                console.log(err);
                msg = "error"
            }
        }
    });
    return({msg:msg});
}
