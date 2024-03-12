const EventEmitter = require('events');
const emisorProductos = new EventEmitter();
//Lo que hace si se ejerce la compra
emisorProductos.on('compra', function(total){
    console.log(`Se realizó una compra por ${total}€`);
})
//Hacemos que ocurra la acción compra
emisorProductos.emit('compra', 500);
