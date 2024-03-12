const path = require('node:path');

//barra separadora de carpètas según SO
console.log(path.sep);

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename('/tmp/carpetaInventada/nombreArchivo.txt');
console.log(base);

//sin extensión
const fileName = path.basename('/tmp/carpetaInventada/nombreArchivo.txt', '.txt');
console.log(fileName);

//saber la extension de algo
const extension = path.extname('image.png');
console.log(extension);
