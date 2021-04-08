import React, { useState } from 'react';

//Dependencias uuid
import uuid from 'uuid/dist/v4';

//Actions
import { agregarTareaTodoActions } from '../actions/todoActions';

//Redux
import { useDispatch } from 'react-redux';

const Formulario = () => {

    const [ nombre, guardarNombre ] = useState('');

    const dispatch = useDispatch();

    //Agergar nueva tarea
    const agregarNuevaTarea = (tarea) => dispatch(agregarTareaTodoActions(tarea));

    //Enviar Formulario
    const submitForm = (e) => {
        e.preventDefault();

        if(nombre.trim() === '' || nombre.length < 3 || nombre.length > 40 || /^[0-9]$/.test(nombre)){
            console.log('Datos Invalidos');
            return;
        }

        //Crear tarea
        const tarea = {
            id: uuid(),
            nombre
        };

        //Pasar al action
        agregarNuevaTarea(tarea);

        //Reiniciar Form
        guardarNombre('');
    };

    return ( 
        <form
            className="row"
            onSubmit={ submitForm }
        >
            <div className="form-group col-md-9">
                <input 
                    type="text"
                    minLength="3"
                    maxLength="40"
                    className="form-control"
                    placeholder="Escribe Algo..."
                    name="nombre"
                    autoComplete="off"
                    value={nombre}
                    onChange={ (e) => guardarNombre(e.target.value) }
                />
            </div>
            <div className="form-group col-md-3">
                <input 
                    type="submit"
                    className="btn btn-dark w-100"
                    value="Agregar"
                />
            </div>
        </form>
     );
}
 
export default Formulario;