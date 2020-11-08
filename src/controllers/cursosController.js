const cursos = require('../models/cursos')

const getAll = (req, res) => {
    console.log(req.body);
    cursos.find(function (err, cursos) {
        res.status(200).send(cursos)
    })
};

const getPorTurno = (req, res) => {
    const parametros = req.query

    cursos.find(parametros, function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
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
    cursos.find({ id }, function (err, curso) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(curso)
    })
}


const getBootcamps = (req, res) => {
    cursos.find({ bootcamp: true }, function (err, curso) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(200).send(curso)
    })
};

const getCursosGratuitos = (req, res) => {
    const estado = req.params.estado
    cursos.find({ estado, gratuito: true }, function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send(cursos)
        }
    })
};

const getCursosPagos = (req, res) => {
    const estado = req.params.estado
    cursos.find({ estado, gratuito: false }, function (err, cursos) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send(cursos)
        }
    })
};

const postCurso = (req, res) => {
    console.log(req.body)
    let curso = new cursos(req.body)

    curso.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }
        res.status(201).send({ message: "Curso resgistrado com sucesso!!" })
    })
};

// Usando o Count -  Código das Meninas
// const postCurso = (req, res) => {
//     cursos.conutDocuments((err, count) => {
//         if (err) {
//             res.status(424).send({ message: err.message });
//         } else {
//             let curso = new cursos(req.body);
//             curso.id = count + 1;
//             curso.save((err) => {
//                 if (err) {
//                     res.status(424).send({ message: err.message });
//                 } else {
//                     res.status(200).send({
//                         status: true,
//                         mensagem: "Curso incluído com sucesso!",
//                     });
//                 }
//             });
//         }
//     });
// }

const deleteCurso = (req, res) => {
    const id = req.params.id
    cursos.deleteMany({ id }, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message: "Curso removido com sucesso!" })
        }
    })
};

//Código Tairine -  Para estudar o que foi feito 
// const deleteCurso = (req, res) => {
//     const id = req.params.id;
//     cursos.find({ id }, (err, curso) => {
//         if (curso.length > 0) {
//             cursos.deleteOne({ id }, err => {
//                 err ? res.status(424).send({ message: err.message }) : res.status(200).send({
//                     status: true,
//                     mensagem: 'Curso excluído com sucesso'
//                 });
//             });
//         } else {
//             res.status(404).send('Curso não encontrado');
//         };
//     });
// };


const deleteCursosPorTurno = (req, res) => {
    const parametros = req.query
    cursos.deleteMany(parametros, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message: "O Curso do turno selecionado foi removido!" })
        }
    })
};

const putCurso = (req, res) => {
    const id = req.params.id
    // update => atualiza um registro
    // updateMany => atualiza vários registros ao mesmo tempo
    // updateOne => atualiza um registro (Atualiza o mais antigo)
    cursos.updateMany({ id }, { $set: req.body }, { upsert: true }, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message: "Curso atualizado!" })
        }
    })
};

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