const argv = require('./config/yargs').argv

const toDo = require('./to-do/to-do')


let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion)
        console.log(tarea)
        break
    case 'listar':
        toDo.getListado()
        break
    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado)
        break
    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion)
        console.log(borrado)
        break
    default:
        console.log('Comando no es reconocido')
}