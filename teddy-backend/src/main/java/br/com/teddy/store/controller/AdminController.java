package br.com.teddy.store.controller;

import br.com.teddy.store.service.IDevolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    IDevolutionService devolutionService;

    @GetMapping("")
    public ResponseEntity getAdmin() {
        return ResponseEntity.ok("");
    }

    @GetMapping("/devolutions")
    public ResponseEntity getDevolutions() {
        return ResponseEntity.ok(devolutionService.findAll());
    }

    @GetMapping("/devolutions/{id}")
    public ResponseEntity getDevolution(@PathVariable Long id) {
        return ResponseEntity.ok(devolutionService.findById(id));
    }
}
