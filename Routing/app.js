const http = require('http');
const cursos = require('./cursos.js');

const servidor = http.createServer((req, res)=>{
    const {method} = req;

    switch(method){
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log(`El metodo usado no puede ser manejado por el servidor: ${method}`);
    }
});

function manejarSolicitudGET(req, res){
    const path = req.url;

    if(path === '/'){
        res.statusCode = 200;
        return res.end('Bienvenidos a mi primera API con NodeJs');
    } else if(path === '/cursos'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if(path === '/cursos/programacion'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else if(path === '/cursos/matematicas'){
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    } else{
        res.statusCode = 404;
        return res.end('El recurso solicitado no existe');
    }
}

function manejarSolicitudPOST(req, res){
    if(path === '/cursos/programacion'){
        res.statusCode=200;
        return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    }
}

const puerto = 3000;

servidor.listen(puerto, ()=>{
    console.log(`El servidor está escuchando en el puerto ${puerto}`);
});