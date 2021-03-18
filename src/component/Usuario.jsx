import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerUsuarios, eliminarUsuarios, agregarUsuarios, editarUsuarios} from '../redux/userDucks'

const Usuario = () => {
    const dispatch = useDispatch()

    const [id, setId] = useState(0);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [modoEdicion, setModoEdicion] = useState(false)

    const usuarios = useSelector(store => store.usuarios.array)

    useEffect(() => {
        dispatch(obtenerUsuarios());
    }, [])

    const guardar = (e) => {
        e.preventDefault()
        console.log("guardar")
        const body = {
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "telefono": telefono
        }
        
        dispatch(agregarUsuarios(body));
        setNombre('')
        setApellido('')
        setEmail('')
        setTelefono('')
    }

    const editar = (valor, id) =>{
        console.log(valor)
        setModoEdicion(true);
        setNombre(valor.nombre)
        setApellido(valor.apellido)
        setEmail(valor.email)
        setTelefono(valor.telefono)
        setId(id)
    }

    const editarTarea = (e) =>{
        e.preventDefault()
        console.log("e",id)

        const body = {
            "nombre": nombre,
            "apellido": apellido,
            "email": email,
            "telefono": telefono
        }

        dispatch(editarUsuarios(body,id));
        setModoEdicion(false);

    }
    
    return (
        <div className="container mt-5">
            <h1>Usuarios</h1>
            <h3 className="text-center">Agregar Usuario</h3>
            <form onSubmit={modoEdicion ? editarTarea: guardar}>
                <input
                type="text"
                placeholder="Nombre"
                className="form-control mb-2"
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                 />

                 <input
                type="text"
                placeholder="Apellido"
                className="form-control mb-2"
                onChange={(e) => setApellido(e.target.value)}
                value={apellido}
                 />

                <input
                type="text"
                placeholder="Email"
                className="form-control mb-2"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                 />

                <input
                type="text"
                placeholder="Telefono"
                className="form-control mb-2"
                onChange={(e) => setTelefono(e.target.value)}
                value={telefono}
                 />
                 {
                    modoEdicion ? (<button className="btn btn-warning btn-" type="submit">Editar</button>)
                : 
                    (<button className="btn btn-primary btn-block" type="submit">Agregar</button>)
                 }
              
            </form>
            <hr></hr>
            <h3>Lista de Usuarios</h3>
            <table className="table">
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Actions</th>
            </tr>
            {
                usuarios.map(item => (
                    <tr>
                        <td>{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.email}</td>
                        <td>{item.telefono}</td>
                        <td>
                        <button onClick={() => editar(item, item.id)}>Editar</button>
                        <button onClick={() => dispatch(eliminarUsuarios(item.id))} >Borrar</button>
                        </td>
                    </tr>
                ))
            }
            </table>
        </div>
    )
}

export default Usuario
