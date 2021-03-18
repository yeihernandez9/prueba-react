import axios from 'axios'

// constantes
const dataInicial = {
    array:[]
}

// types
const OBTENER_USUARIOS_EXITO = 'OBTENER_USUARIOS_EXITO'
const DELETE_USUARIOS_EXITO = 'DELETE_USUARIOS_EXITO'
const AGREGAR_USUARIOS_EXITO = 'AGREGAR_USUARIOS_EXITO'
const EDITAR_USUARIOS_EXITO = 'EDITAR_USUARIOS_EXITO'

// reducer
export default function usuarioReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_USUARIOS_EXITO:
            return {...state, array: action.payload}
        case DELETE_USUARIOS_EXITO:
            return {...state, array: action.payload}
        case AGREGAR_USUARIOS_EXITO:
            return {...state, array: action.payload}
        case EDITAR_USUARIOS_EXITO:
                return {...state, array: action.payload}
        default:
            return state
    }
}

// acciones
export const obtenerUsuarios = () => async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:5000/api/usuarios/getusuarios')
        dispatch({
            type: DELETE_USUARIOS_EXITO,
            payload: res.data.data
        })
    }catch(error){

    }
}

export const eliminarUsuarios = (id) => async (dispatch) => {
    try{
        const res = await axios.delete(`http://localhost:5000/api/usuarios/eliminar/${id}`)
        dispatch({
            type: OBTENER_USUARIOS_EXITO,
            payload: res.data.data
        })
    }catch(error){

    }
}

export const agregarUsuarios = (body) => async (dispatch) => {
    try{
        const res = await axios.post('http://localhost:5000/api/usuarios/guardarusuario',body)
        dispatch({
            type: AGREGAR_USUARIOS_EXITO,
            payload: res.data.data
        })
    }catch(error){

    }
}

export const editarUsuarios = (body,id) => async (dispatch) => {
    try{
        const res = await axios.put(`http://localhost:5000/api/usuarios/actualizar/${id}`,body)
        dispatch({
            type: EDITAR_USUARIOS_EXITO,
            payload: res.data.data
        })
    }catch(error){

    }
}