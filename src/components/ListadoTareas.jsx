import React from 'react';

//Componente
import Tarea from './Tarea';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { filtrarTodoNormalActions, filtrarTodoParabolaActions, filtroNormalActions } from '../actions/todoActions';

const ListadoTareas = () => {

    const tareas = useSelector( state => state.todo.todo );

    //Dispatch
    const dispatch = useDispatch();

    //Filtro Alfabetico

    const filtrarAlp = (tareas) => dispatch(filtrarTodoNormalActions(tareas));

    //Filtro Parabola

    const filtrarPalab = () => dispatch( filtrarTodoParabolaActions() );

    //Filtro Normal
    const filtroNormal = (tareas) => dispatch( filtroNormalActions(tareas) );

    //Filtro Nerd
    //const FiltroNerd = (tareas) => dispatch( filtroNerdActions(tareas) );

    if(tareas.length === 0) return <h3 className="text-center mt-3">No hay tareas</h3>

    return ( 
        <main className="m-auto mt-3">
            <h3 className="text-center">Listado de Tareas</h3>

            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { tareas.map( (tarea, indice) => (
                        <Tarea 
                            key={tarea.id}
                            tarea={tarea}
                            indice={indice}
                        />
                    ) ) }
                </tbody>
            </table>

            <section>
                <button
                    type="button"
                    className="btn btn-dark d-inline-block"
                    onClick={ () => filtrarAlp(tareas) }
                >Sort alphabetical</button>
                <button
                    type="button"
                    className="btn btn-danger d-inline-block"
                    onClick={ () => filtrarPalab() }
                >Sort parabolical</button>
            </section>

            <section className="mt-4">
                <button
                    type="button"
                    className="btn btn-dark d-inline-block"
                    onClick={ () => filtroNormal(tareas) }
                >Normal</button>
                <button
                    type="button"
                    className="btn btn-danger d-inline-block"
                    onClick={ () => {
                    } }
                >Nerd Style</button>
            </section>
        </main>
    );
}
 
export default ListadoTareas;