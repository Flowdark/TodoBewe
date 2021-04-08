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


export function agregarTareaTodoActions(tarea){
    return (dispatch) => {
        
        dispatch(agregarTareaTodo(tarea));

        try {
            dispatch(agregarTareaTodoExito());
        } catch (error) {
            dispatch(agregarTareaTodoError());
        }

    }
}

const agregarTareaTodo = (tarea) => ({
    type: AGREGAR_TAREA_TODO,
    payload: tarea
})

const agregarTareaTodoExito = () => ({
    type: AGREGAR_TAREA_TODO_EXITO
});

const agregarTareaTodoError = () => ({
    type: AGREGAR_TAREA_TODO_ERROR
});

//Eliminar Tarea
export function eliminarTareaActions(tareaId){
    return (dispatch) => {
        dispatch(eliminarTarea(tareaId));
    };
};

const eliminarTarea = (tareaId) => ({
    type: ELIMINAR_TAREA,
    payload: tareaId
});

//Filtro Notmal
export function filtrarTodoNormalActions(tareas){
    return (dispatch) => {
        
        dispatch(filtrarTodoNormal(tareas));

        try {
            dispatch(filtrarTodoNormalExito());
        } catch (error) {
            dispatch(filtrarTodoNormalError());
        }

    }
}

const filtrarTodoNormal = (tareas) => ({
    type: FILTRAR_ALP,
    payload: tareas
})

const filtrarTodoNormalExito = () => ({
    type: FILTRAR_ALP_EXITO
});

const filtrarTodoNormalError = () => ({
    type: FILTRAR_ALP_ERROR
});

//Filtro pARABOLA
export function filtrarTodoParabolaActions(){
    return (dispatch) => {
        
        dispatch(filtrarTodoParabola());

        try {
            dispatch(filtrarTodoParabolaExito());
        } catch (error) {
            dispatch(filtrarTodoParabolaError());
        }

    }
}

const filtrarTodoParabola = () => ({
    type: FILTRAR_PARABOLA,
})

const filtrarTodoParabolaExito = () => ({
    type: FILTRAR_PARABOLA_EXITO
});

const filtrarTodoParabolaError = () => ({
    type: FILTRAR_PARABOLA_ERROR
});


//Filtro Normal
export function filtroNormalActions(tareas){
    return (dispatch) => {
        dispatch(filtroNormal(tareas));
    };
}

const filtroNormal = (tareas) => ({
    type: FILTRAR_NORMAL,
    payload: tareas
})

