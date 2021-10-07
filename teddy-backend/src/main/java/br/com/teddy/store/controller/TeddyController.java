package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Teddy;
import br.com.teddy.store.service.IGenericService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/teddy")
public class TeddyController {

    @Autowired
    IGenericService<Teddy> teddyGenericService;

    @GetMapping("")
    public ResponseEntity getTeddys() {
        return ResponseEntity.ok(teddyGenericService.findAll());
    }

    @PostMapping("")
    public ResponseEntity createTeddy(@RequestBody Teddy teddy) {
        return ResponseEntity.ok(teddyGenericService.saveAndFlush(teddy));
    }

    @GetMapping("/{id}")
    public ResponseEntity getTeddy(@PathVariable Long id) {
        return ResponseEntity.ok(teddyGenericService.findById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteTeddy(@PathVariable Long id) {
        return ResponseEntity.ok(teddyGenericService.delete(id));
    }

    @PutMapping("")
    public ResponseEntity updateTeddy(@RequestBody Teddy teddy) {
        return ResponseEntity.ok(teddyGenericService.saveAndFlush(teddy));
    }
}
