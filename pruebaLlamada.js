"use strict";
var shell = require('shelljs');

function doAction(){
	shell.exec('termux-telephony-call 629474997');
}
(()=>{
	doAction();
	console.log("executed");
})()