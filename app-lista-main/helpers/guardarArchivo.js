const fs = require('fs');

const cargarDB = () => {
    const archivo = './db/data.json';
    try {
        const data = fs.readFileSync(archivo, { encoding: 'utf-8' });
        return JSON.parse(data);
    } catch (error) {
        return []; // Retorna un array vacío si el archivo no existe o está vacío
    }
}

const guardarDB = (data) => {
    const archivo = './db/data.json';
    fs.writeFileSync(archivo, JSON.stringify(data));
}

module.exports = {
    cargarDB,
    guardarDB
}
