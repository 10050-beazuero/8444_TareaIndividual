$('#boton1').click(function(){
	$.post('funciones.php', {
	nombre: 'Jesús Pérez',
	ciudad: 'Los Cabos',
	edad: 60,
	telefono: '2222222222'
	},
	function (datos, estado) {
	alert("Información: "+datos+"\nEstado: "+estado);
	})
})