package net.javaguides.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Tareas")
public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "NombreTarea")
    private String NombreTarea;

    @Column(name = "Descripcion")
    private String Descripcion;

    @Column(name = "Fecha_Creacion")
    private Date Fecha_Creacion;
    
    @Column(name = "Vigente")
    private Bolean Vigente;
}
