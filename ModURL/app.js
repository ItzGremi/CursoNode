const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=uno');

console.log(miURL.hostname); //www.ejemplo.org
console.log(miURL.pathname); // /cursos/programacion
console.log(miURL.searchParams); //ordenar=>vistas, nivel=>uno

