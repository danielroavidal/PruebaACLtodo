package net.javaguides.springboot.controller;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/Tareas")
public class TareaController {

    @Autowired
    private TareaRepository TareaRepository;

    @GetMapping
    public List<Tarea> getAllTareas(){
        return TareaRepository.findAll();
    }

    // build create Tarea REST API
    @PostMapping
    public Tarea createTarea(@RequestBody Tarea Tarea) {
        return TareaRepository.save(Tarea);
    }

    // build get Tarea by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Tarea> getTareaById(@PathVariable  long id){
    	Tarea Tarea = TareaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tarea not exist with id:" + id));
        return ResponseEntity.ok(Tarea);
    }

    // la construccion de actualizar Tarea REST API
    @PutMapping("{id}")
    public ResponseEntity<Tarea> updateTarea(@PathVariable long id,@RequestBody Tarea TareaDetails) {
    	Tarea updateTarea = TareaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tarea not exist with id: " + id));

        updateTarea.setNombreTarea(TareaDetails.getNombreTarea());
        updateTarea.setDescripcion(TareaDetails.getDescripcion());
        updateTarea.setFechaCreacion(TareaDetails.getFechaCreacion());
        updateTarea.setVigente(TareaDetails.getVigente());
        
        TareaRepository.save(updateTarea);

        return ResponseEntity.ok(updateTarea);
    }

    // construccion de eliminar Tarea REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteTarea(@PathVariable long id){

    	Tarea Tarea = TareaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Tarea not exist with id: " + id));

    	TareaRepository.delete(Tarea);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
