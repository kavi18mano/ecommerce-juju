package com.coviam.juju.project_postgres_user.controller;


import com.coviam.juju.project_postgres_user.dto.UserDTO;
import com.coviam.juju.project_postgres_user.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;


    @RequestMapping(method = RequestMethod.POST,value ="/signup")
    public ResponseEntity addUser(@RequestBody UserDTO userDTO){

        Boolean userDTO_add= userService.InsertUserDetails(userDTO);
        return new ResponseEntity(userDTO_add,HttpStatus.OK);
    }



    @RequestMapping(method = RequestMethod.GET,value = "/login")
    public ResponseEntity login(@RequestParam(name = "id",required = true)String user_id,@RequestParam(name = "passwd",required = true)String passwd){



            return new ResponseEntity(userService.LoginFetchUserDetails(user_id,passwd),HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET,value = "/profile")
    public ResponseEntity retriveUser(@RequestParam(name = "id",required = true)String user_id){

        return new ResponseEntity(userService.retriveUserDetails(user_id),HttpStatus.OK);
    }


}
