const cursos = require('../models/cursos')

const getAll = (req, res) => {
    console.log(req.body);
    cursos.find(function(err, cursos){
    res.status(200).send(cursos)
    })    
};

const getPorTurno = (req, res) => {
    const parametros = req.query

    cursos.find(parametros, function (err, cursos){
        if(err) {
            res.status(500).send({message: err.message})
        } else {
            res.status(200).send(cursos)
        }
    })   
}

// Exemplo de Talita
// const getById = (req, res) => {
//     cursos.find({ id: req.params.id }, (err, cursos) => {
//         if(err) {
//             res.status().send({ message: err.message})
//         }
//         res.status(200).send(cursos)
//     })
// }   

const getById = (req, res) => {
    const id = req.params.id;
    cursos.find({ id }, function(err, curso){
        if(err) {
            res.status(500).send({message: err.message})
        }
        res.status(200).send(curso)
    }) 
}
     

const getBootcamps = (req, res) => {
       cursos.find({bootcamp: true}, function(err, curso){
        if(err) {
            res.status(500).send({message: err.message})
        }
        res.status(200).send(curso)
    })
    
}

const getCursosGratuitos = (req, res) => {
    res.status(200).send({ message: "pegar todos os cursos que são gratuitos"})
}

const getCursosPagos = (req, res) => {
    res.status(200).send({ message: "pegar todos os cursos que são pagos"})
}

const postCurso = (req, res) => {
    console.log(req.body)
    let curso = new cursos(req.body)

    curso.save(function(err) {
        if(err) {
            res.status(500).send({message: err.message})
        }
        res.status(201).send({ message: "Curso resgistrado com sucesso!!"})
    })
    
}

const deleteCurso = (req, res) => {
    res.status(200).send({ message: "remover um curso"})
}

const deleteCursosPorTurno = (req, res) => {
    const parametros = req.query
    console.log(parametros)
    res.status(200).send({ message: "deletar os cursos por turnos"})
}

const putCurso = (req, res) => {
    res.status(200).send({ message: "atualizar um curso"})
}

module.exports = {
    getAll,
    getPorTurno,
    getById,
    getBootcamps,
    getCursosGratuitos,
    getCursosPagos,
    postCurso,
    deleteCurso,
    deleteCursosPorTurno,
    putCurso
}