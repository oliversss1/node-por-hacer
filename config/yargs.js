const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por-hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'completado de la tarea por-hacer'
};


const argv = require('yargs')
    .command('crear', 'crear elemento por-hacer', { descripcion })
    .command('borrar', 'borrar elemento por-hacer', { descripcion })
    .command('listar', 'listar elementos por-hacer')
    .command('actualizar', 'actualiza elemento por-hacer', { descripcion, completado })
    .help()
    .argv;

module.exports = {
    argv
}