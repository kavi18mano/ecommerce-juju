package com.coviam.juju.project_postgres_user.services;

import com.coviam.juju.project_postgres_user.dto.UserDTO;

import java.util.List;

public interface UserService {
    Boolean InsertUserDetails(UserDTO userDTO);
    Boolean LoginFetchUserDetails(String userID,String userPasswd);
    UserDTO retriveUserDetails(String email);

}
