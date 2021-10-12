package br.com.teddy.store.controller;

import br.com.teddy.store.domain.Devolution;
import br.com.teddy.store.service.IDevolutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer/{id}/devolution")
public class DevolutionController {

    @Autowired
    IDevolutionService devolutionService;

    @PostMapping("")
    public ResponseEntity requestDevolution(@PathVariable Long id, @RequestBody Devolution devolution) {

        try {
            devolutionService.sendDevolutionRequest(devolution);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
        return ResponseEntity.ok("");
    }

    @GetMapping("")
    public ResponseEntity getDevolution(@PathVariable Long id) {
        return ResponseEntity.ok(devolutionService.findAllDevolutionByCustomerId(id));
    }
}
