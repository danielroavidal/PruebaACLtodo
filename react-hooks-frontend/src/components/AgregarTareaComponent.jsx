import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import TareasService from '../services/TareasService'

const AgregarTareaComponent = () => {

    const [NombreTarea, setNombreTarea] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [FechaCreacion, setFechaCreacion] = useState('')
    const [Vigente, setVigente] = useState('')
    const history = useHistory();
    const {Id} = useParams();

    const saveOrUpdateTarea = (e) => {
        e.preventDefault();

        const Tarea = {Id, NombreTarea, Descripcion, FechaCreacion, Vigente}

        if(Id){
            TareasService.updateTarea(id, Tarea).then((response) => {
                history.push('/Tarea')
            }).catch(error => {
                console.log(error)
            })

        }else{
            TareasServiceService.createTarea(Tarea).then((response) =>{

                console.log(response.data)
    
                history.push('/Tarea');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        TareasService.getTareaById(id).then((response) =>{
            setNombreTarea(response.data.NombreTarea)
            setDescripcion(response.data.Descripcion)
            setFechaCreacion(response.data.FechaCreacion)
            setVigente(response.data.Vigente)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Actualizar Tarea</h2>
        }else{
            return <h2 className = "text-center">Agregar Tarea</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nombre de Tarea :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Ingrese el nombre"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {Identificador}
                                        onChange = {(e) => setNombreTarea(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">Descripcion:</label>
                                    <input
                                        type = "text"
                                        placeholder = "Describa la tarea"
                                        name = "Descripcion"
                                        className = "form-control"
                                        value = {Descripcion}
                                        onChange = {(e) => setDescripcion(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">FechaCreación :</label>
                                    <input
                                        type = "date"
                                        placeholder = "Fecha actual"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {Date}
                                        onChange = {(e) => setDate(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateTarea(e)} > Guardar </button>
                                <Link to="/Tarea" className="btn btn-danger"> Cancelar </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AgregarTareaComponent
