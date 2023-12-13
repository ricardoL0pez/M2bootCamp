import React from "react";

import TechSkills from "./techskills";
import Botones from "./botones";

const studentName = "unRiccio";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>Benvenuto!</h1>
      <h3>{studentName}</h3>
      <ul>
        {
          techSkills.map((skill, index) => { //techSkills.map((skill) => <li> { skill } </li>;
            return (
              <li key={index}> {skill} </li> //React me pide que agregue 
            )
          })
        }
      </ul>
      <ul> <TechSkills habilidadesTecnológicas = { techSkills }/> </ul>

      <Botones alertas = { alerts } />
    </div>

    
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
