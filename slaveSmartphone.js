"use strict";
var io = require('socket.io');
var shell = require('shelljs');
//TODO master va a controlar slave smartphone de la misma manera que slave extension??

//file to run in termux.


/**
 * Para implementar los métodos que escuchan al master (servidor).
 *
 * TODO implementar conexión a servidor y método básico para ir probando. socket.io
 * incluir en package.json script npm run slave.js [ip y puerto a los que conectarse]
 */
(async function(){

	if(process.argv.length > 3){
		console.log("just first argument will be used. Specify ip:port"); //TODO se puede mejorar descripción uso.

		// 1. Nos conectamos a servidor. (Master de pruebas)
		var socket = io('http://'+process.argv[2]);

		socket.on('msg',function(data){
			
			console.log(data.message);

			// 2. Cargamos las funciones de escucha al master.	
			loadAllListeners(socket,masterExtension);

			// 3. Informamos al master de que slave está ready.
			socket.emit('smartphoneReady',{});
	
		});
	}
	if(process.argv.length < 3){
		console.log("Specify master ip:port.");
	}
})() 

/**
 * Carga todas las functiones de escucha al master, listeners.
 **
 * @param  {Socket} - socket (socket.io)
 *
 */
function loadAllListeners(socket,extension){
	socket.on('callMe',doAction(socket,extension);
	socket.on('prueba',()=>{console.log("prueba correcta");});
}

/**
 *
 */
function doAction(socket, extension){
	shell.exec('termux-telephony-call 629474997',async);
}