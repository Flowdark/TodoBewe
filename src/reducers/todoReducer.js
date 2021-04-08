import {

    AGREGAR_TAREA_TODO,
    AGREGAR_TAREA_TODO_EXITO,
    AGREGAR_TAREA_TODO_ERROR,

    ELIMINAR_TAREA,
    ELIMINAR_TAREA_EXITO,
    ELIMINAR_TAREA_ERROR,

    FILTRAR_ALP,
    FILTRAR_ALP_EXITO,
    FILTRAR_ALP_ERROR,

    FILTRAR_PARABOLA,
    FILTRAR_PARABOLA_EXITO,
    FILTRAR_PARABOLA_ERROR,

    FILTRAR_NORMAL,
    FILTRAR_NORMAL_EXITO,
    FILTRAR_NORMAL_ERROR,

    FILTRAR_NERD,
    FILTRAR_NERD_EXITO,
    FILTRAR_NERD_ERROR

} from '../types';

const initialState = {
    todo: [],
    temp: [],
    error: false,
    loading: false
};

export default function( state = initialState, action ){

    switch(action.type){

        case AGREGAR_TAREA_TODO:
            return {
                ...state,
                loading: true,
                todo: [ ...state.todo, action.payload ]
            };

        case ELIMINAR_TAREA:
            return {
                ...state,
                loading: true,
                todo: state.todo.filter( tarea => tarea.id !== action.payload )
            };

        case AGREGAR_TAREA_TODO_EXITO:
        case FILTRAR_ALP_EXITO:
        case FILTRAR_PARABOLA_EXITO:
            return {
                ...state,
                error: false,
                loading: false
            };

        case AGREGAR_TAREA_TODO_ERROR:
        case FILTRAR_ALP_ERROR:
        case FILTRAR_PARABOLA_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            };

        case FILTRAR_ALP:
            return {
                ...state,
                todo: [ ...action.payload.sort( (a, b) => a.nombre > b.nombre ? 1 : -1  ) ]
            };

        case FILTRAR_PARABOLA:
            return {
                ...state,
                todo: [ ...state.todo.sort( (a, b) => 0.2 - Math.random() ) ]
            };

        case FILTRAR_NORMAL:
            return {
                ...state,
                todo: state.temp.length > 0 ? state.temp : state.todo,
                temp: []
            };

        default:
            return state;

    }

}