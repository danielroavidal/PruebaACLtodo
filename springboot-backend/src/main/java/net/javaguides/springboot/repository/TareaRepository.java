package net.javaguides.springboot.repository;

import net.javaguides.springboot.model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface TareaRepository extends JpaRepository<Tarea, Long> {
    // all crud database methods
}


