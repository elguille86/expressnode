// Usando el Framework Express
var pais = 'Peru';
var basededatos ={
	usuario : "guillermo",
	clave : "123456"
}


console.log ('Servidor Iniciado');
 
// Invocamos el modulo express
var express = require("express");
//parcero Es un termino, selecciona un formato de datos y lo convierte a otro
// en este caso los datos del formulario los convierte a json
var parcero = require("body-parser")
var web = express();// --> instanciamos al Servidor
web.use(parcero.urlencoded() );// indicamos que express use los datos del body parser
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
	// con la linea console.log (req.body);, vemos por consola los datos enviados por formulario
	//console.log (req.body);
	if(req.body.usuario == basededatos.usuario && req.body.clave == basededatos.clave){
		res.send('Bienvenido al area Secretta' );
	}else{
		res.send('Error, no tiene acceso' );
	}

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