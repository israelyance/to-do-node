
descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
                .command('crear', 'Crea un elemento por hacer', {
                    descripcion
                })
                .command('actualizar', 'Actualiza el estado completado de una tarea', {
                    descripcion,
                    completado
                })
                .command('listar', 'Listar las tareas por hacer')
                .command('borrar', 'Eliminar la tarea por hacer', {
                    descripcion
                })
                .help()
                .argv


module.exports = {
    argv
}