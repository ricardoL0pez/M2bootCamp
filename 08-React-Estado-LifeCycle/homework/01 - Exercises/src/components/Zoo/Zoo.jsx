import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
// import styledZoo from "./Zoo.module.css";
import styles from './Zoo.module.css';
//import { useState } from "react"; No importamos useState por que ya importamos React

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    allAnimals: [],
  });

  const handleInputChange = (event) => { //event es un objeto
    setZoo({
      ...zoo,
      zooName: event.target.value,
    })
  };

  const handleSpecies = (event) => { //event es un objeto
    const specie = event.target.value
    setZoo({
      ...zoo, 
      animals: zoo.allAnimals.filter(animal => animal.specie === specie) ///me filtra las especies que sean igual a las del evento -linea 27- a las especies del value
    })
  };

  const handleAllSpecies = (event) => { //event es un objeto
    setZoo({
      ...zoo,
      animals: zoo.allAnimals
    })
  };

  React.useEffect(() => { //Lleva siempre dos parametros callback y un []
    fetch('http://localhost:3001/zoo')
      .then((res) => res.json())
      .then((data) => setZoo({
        ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals
      })
      )
      .catch((error) => console.log(error))
  }, []);

  return (
    <div className={styles.divContent}>
      <label >Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies}/>
      <Animals animals={zoo.animals}/>
    </div>
  );
}
