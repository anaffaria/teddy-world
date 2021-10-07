package br.com.teddy.store.controller;

import br.com.teddy.store.service.IColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/color")
public class ColorController {

    @Autowired
    IColorService colorService;

    @GetMapping("")
    public ResponseEntity getColors() {
        return ResponseEntity.ok(colorService.findAll());
    }
}
