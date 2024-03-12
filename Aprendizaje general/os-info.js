//Vamos a ver módulos nativos

const os = require('node:os');

console.log('Información del sistema operativo:');
console.log('-----------------------------');
console.log('Nombre del sistema operativo:', os.platform());
console.log('Versión del sistema operativo:', os.release());
console.log('Arquitectura sistema operativo:', os.arch());
console.log('CPUs:', os.cpus());
console.log('Tiempo que tu ordenador lleva encendido:', os.uptime() / 60 / 60);