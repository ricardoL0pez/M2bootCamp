import './deporteDetail.css';
import React from 'react';
import * as actions from "./../../redux/actions/index";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const DeporteDetail = (props) => {
  
  const {id} = useParams();
  const deporte = useSelector((state)=> state.deporteDetail);
  const dispatch = useDispatch();


  React.useEffect(()=>{
    dispatch(actions.getDeporteDetail(id))
  },[id])


   return (
   <div className='detail'>
    <h1>{deporte.nombre}</h1>
   </div>);
};

export default DeporteDetail;