
const fs = require('fs')
const colors = require('colors')

let listadoPorHacer = []

const guardarDB = () => {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(listadoPorHacer)
    
        fs.writeFile(`db/data.json`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`to-do.json`)
        })
    })
}


const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}



const crear = (descripcion) => {
    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer)

    guardarDB()

    return porHacer
}


const borrar = (descripcion) => {
    cargarDB()

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    })
    
    if (listadoPorHacer.length === nuevoListado.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado
        guardarDB()
        return true
    }

    guardarDB()

    return valor
}


const getListado = () => {
    cargarDB()

    for (let tarea of listadoPorHacer) {
        console.log('=========To Do============='.green)
        console.log(tarea.descripcion)
        console.log('Estado', tarea.completado)
        console.log('==========================='.green)
    }
}


const actualizar = (descripcion, completado) => {
    cargarDB()

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB()
        return true
    } else {
        return false
    }
}


module.exports = {
    crear,
    borrar,
    getListado,
    actualizar
}