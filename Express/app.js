const express = require('express');
const app = express();
const {infoCursos} = require('./cursos.js');

//Routers
const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

//Routing
app.get('/', (req, res)=>{
    res.send('Mi primer servidor. Cursos ❤.');
});

app.get('/api/cursos', (req, res)=>{
    res.send(JSON.stringify(infoCursos));
});

//Cursos programacion
//Uso el router en este caso para no tener que escribir la dirección completa siempre, se podría aplicar a todo.
routerProgramacion.get('/', (req, res)=>{
    res.send(JSON.stringify(infoCursos.programacion));
});

app.get('/api/cursos/programacion/:lenguaje', (req, res)=>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso=>curso.lenguaje === lenguaje);

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b)=>{
            b.vistas - a.vistas
        })))
    }

    res.send(JSON.stringify(resultados));

});

//Cursos matematicas
app.get('/api/cursos/matematicas', (req, res)=>{
    res.send(JSON.stringify(infoCursos.matematicas));
});

app.get('/api/cursos/matematicas/:tema', (req, res)=>{
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso=>curso.tema === tema);

    if(resultados.length === 0){
        res.status(404).send(`No se encontraron temas de ${tema}`)
    }

    res.send(JSON.stringify(resultados));
});

routerProgramacion.post('/', (req, res)=>{
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    res.send(JSON.stringify(programacion));
})


//process.env.PORT para obtener el puerto que tengamos asignado
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, ()=>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
