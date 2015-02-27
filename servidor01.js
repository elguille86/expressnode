// Usando el Framework Express
var pais = 'Peru';
var basededatos ={
	usuario : "guillermo",
	clave : "123456"
}


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

// Nosta si ingresados colocando 127.0.0.1:6969/entrar nos mostrar un error por que solo se ingresa con el metodo POST
web.post('/entrar' , function(req , res){
	console.log (req);
	//res.send('has ingresado con el metodo POST' );
});

web.get('/test' , function(req , res){
	// Nota las Varaibles aparecen el requiere -> uso de varialbles GET
	// En navegador :  /test?auto=kia&color=azul') ;
	// Con este puerdo lear variables del URL 
	res.send('Tu Auto es '+ req.query.auto + ' y tu Color es '+ req.query.color);
	console.log (req);
});

web.get('/empresa/guillermo' , function(req , res){
	res.send('Hola Guillermo  <strong>' + pais +'</strong>');
});