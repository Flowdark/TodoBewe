import React, { useState, useEffect } from 'react';

//Componente
import Logo from './Logo';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { eliminarTareaActions } from '../actions/todoActions';

const Tarea = ({ tarea, indice }) => {

    const [nombreTarea, setNombreTarea] = useState([]);

    const dispatch = useDispatch();

    const generateArray = (nombre) => {
        return nombre.split(" ");
    };

    //Eliminar Tarea
    const eliminarTarea = (tareaId) => dispatch(eliminarTareaActions(tareaId));

    useEffect( () => {
        if(tarea.nombre !== undefined){
            setNombreTarea(generateArray(tarea.nombre));
        }
    }, [] );

    return ( 
        <tr>
            <th scope="row">{indice}</th>
            <td>{
                    nombreTarea.map( (palabra, i) => palabra.includes('$') ? <Logo key={i} palabra={palabra} /> : <span>{` ${palabra} `}</span> )
                }</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={ () => eliminarTarea(tarea.id) }
                >Eliminar</button>
            </td>
        </tr>
    );
}
 
export default Tarea;