package com.meublog;

import com.meublog.model.User;
import com.meublog.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class MeuBlogApplication {

    public static void main(String[] args) {
        SpringApplication.run(MeuBlogApplication.class, args);
    }

    // Cria a conta admin automaticamente
    @Bean
    CommandLineRunner init(UserRepository userRepository, PasswordEncoder encoder) {
        return args -> {
            if(userRepository.findByUsername("beatriz") == null){
                User admin = new User();
                admin.setUsername("beatriz");
                admin.setPassword(encoder.encode("SUA_SENHA_SEGURA"));
                admin.setRole("ADMIN");
                userRepository.save(admin);
            }
        };
    }
}
