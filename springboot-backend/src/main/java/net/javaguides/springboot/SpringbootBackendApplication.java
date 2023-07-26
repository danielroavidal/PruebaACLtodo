package net.javaguides.springboot;

import net.javaguides.springboot.model.Tarea;
import net.javaguides.springboot.repository.TareaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private TareaRepository TareaRepository;

	@Override
	public void run(String... args) throws Exception {

	
	}
}
