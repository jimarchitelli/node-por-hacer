const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de la terea por hacer"
};
const completado = {
  alias: "c",
  default: true,
  desc: "Establece si una tarea fue completada"
};

const argv = require("yargs")
  .command("crear", "Crea una tarea", { descripcion })
  .command("actualizar", "Actualiza el estado completado de una tarea", {
    descripcion,
    completado
  })
  .command("eliminar", "Elimina una tarea", { descripcion })
  .command("listar", "Lista las tareas")
  .help().argv;

module.exports = {
  argv
};
