import axios from 'axios'

const Tarea_BASE_REST_API_URL = 'http://localhost:8080/api/v1/Tarea';

class TareasService{

    getAllTarea(){
        return axios.get(Tarea_BASE_REST_API_URL)
    }

    createTarea(Tarea){
        return axios.post(Tarea_BASE_REST_API_URL, employee)
    }

    getTareaById(TareaId){
        return axios.get(Tarea_BASE_REST_API_URL + '/' + TareaId);
    }

    updateTarea(TareaId, Tarea){
        return axios.put(Tarea_BASE_REST_API_URL + '/' +TareaId, Tarea);
    }

    deleteTarea(TareaId){
        return axios.delete(Tarea_BASE_REST_API_URL + '/' + TareaId);
    }
}

export default new TareasService();