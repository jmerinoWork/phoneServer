"use strict";
var shell = require('shelljs');

async function doAction(){
	await shell.exec('termux-telephony-call 629474997',async);
}
(async function(){
	await doAction();
	console.log("executed");
})()