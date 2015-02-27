// Usando el Framework Express
var pais = 'Peru';
console.log ('Servidor Iniciado');
 
// Invocamos el modulo express
var express = require("express");
var web = express();// --> instanciamos al Servidor
var servidor;

// asiendo uso de una funcion anomima
servidor = web.listen(6969, function(){
	console.log('Servidor Arrancado ');
});
// Donde '/', es la rais del proyecto
// Los Servidores Web atienes los momentos, los Requerimientos='req' y Respuestas ='res'
web.get('/' , function(req , res){
	res.sendfile('formulario.html');
});

web.get('/test' , function(req , res){
	// Nota las Varaibles aparecen el requiere
	// En navegador :  /test?auto=kia&color=azul');
	// Con este puerdo lear variables del URL 
	res.send('Tu Auto es '+ req.query.auto + ' y tu Color es '+ req.query.color);
	console.log (req);
});

web.get('/empresa/guillermo' , function(req , res){
	res.send('Hola Guillermo  <strong>' + pais +'</strong>');
});