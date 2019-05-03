const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile("db/data.json", data, error => {
    if (error) throw new Error("No se pudo grabar", error);
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = descripcion => {
  let porHacer = {
    descripcion,
    completado: false
  };

  cargarDB();
  listadoPorHacer.push(porHacer);
  guardarDB();

  return porHacer;
};

const listar = () => {
  cargarDB();

  return listadoPorHacer;
};

const actualizar = (descripcion, completado) => {
  cargarDB();

  let indice = listadoPorHacer.findIndex(x => x.descripcion === descripcion);

  if (indice >= 0) {
    listadoPorHacer[indice].completado = completado;

    guardarDB();

    return listadoPorHacer[indice];
  } else throw new Error("No existe la tarea");
};

const eliminar = descripcion => {
  
  cargarDB();
  
  let indice = listadoPorHacer.findIndex(x => x.descripcion === descripcion);

  if (indice >= 0) {
     let borrado = listadoPorHacer.splice(indice, 1);
    guardarDB();

    return borrado;
  }

  return 'No se pudo borrar';
};

module.exports = {
  crear,
  listar,
  actualizar,
  eliminar
};
