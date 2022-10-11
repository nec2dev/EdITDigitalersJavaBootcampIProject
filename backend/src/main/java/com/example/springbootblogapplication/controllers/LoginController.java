package com.example.springbootblogapplication.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;

@Controller
//@RestController
//@RequestMapping("/login")
public class LoginController {
    @GetMapping("/login")
    public String getLogin() {
        return "login";
    }
}
