//const obj = require("./funciones");
//obj es un objeto que contiene las dos const suma-resta

/* const { suma } = require("./funciones"); En el caso ue solo requiera suma y no traerme todo el objeto
const { num1, num2} = require("./variables"); */
import { suma } from "./funciones";
import { num1, num2} from "./variables";

//console.log("Andiamo a fare una suma");

// const resultado = obj.suma(5,4);
const resultado = suma(num1, num2);


console.log(resultado);


