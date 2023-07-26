import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import TareasService from '../services/TareasService'

const ListaDeTareasComponent = () => {

    const [Tareas, setTareas] = useState([])

    useEffect(() => {

        getAllTareas();
    }, [])

    const getAllTareas = () => {
        TareasService.getAllTareas().then((response) => {
            setTareas(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteTarea = (TareaId) => {
        TareasService.deleteTarea(TareaId).then((response) =>{
        getAllTareas();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center">Lista de Tareas</h2>
            <Link to = "/add-Tareas" className = "btn btn-primary mb-2" > Agregar Tarea </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Tareas Id </th>
                    <th> Tareas NombreTarea </th>
                    <th> Tareas Descripcion </th>
                    <th> Tareas FechaCreacion </th>
                    <th> Tareas Vigente </th>
                    <th> Opciones </th>
                </thead>
                <tbody>
                    {
                        Tareas.map(
                            Tareas =>
                            <tr key = {Tareas.id}> 
                                <td> {Tareas.id} </td>
                                <td> {Tareas.NombreTareas} </td>
                                <td>{Tareas.Descripcion}</td>
                                <td>{Tareas.FechaCreacion}</td>
                                <td>{Tareas.Vigente}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-Tareas/${Tareas.id}`} >Actualizar</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteTareas(Tareas.id)}
                                    style = {{marginLeft:"10px"}}> Eliminar</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListaDeTareasComponent
