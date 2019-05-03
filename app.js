const argv = require("./config/yargs").argv;
const colors = require("colors");
const porHacer = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
  case "crear":
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case "listar":
    let listado = porHacer.listar();
    listado.forEach(element => {
      console.log("======Por hacer======".green);
      console.log(element.descripcion);
      console.log(`Estado: ${element.completado}`);
      console.log("=====================".green);
    });
    break;
  case "actualizar":
    console.log(porHacer.actualizar(argv.descripcion, argv.completado));
    break;
    case "eliminar":
    console.log(porHacer.eliminar(argv.descripcion));
    break;
  default:
    console.log("Comando no reconocido");
}
