package com.coviam.juju.project_postgres_user.services.Impl;

import com.coviam.juju.project_postgres_user.dto.UserDTO;
import com.coviam.juju.project_postgres_user.entity.User;
import com.coviam.juju.project_postgres_user.repository.UserRepository;
import com.coviam.juju.project_postgres_user.services.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;


@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;


    @Override
    public Boolean InsertUserDetails(UserDTO userDTO) {

        if(userDTO!=null) {

            try {
                String pass=cryptWithMD5(userDTO.getPassword());
                userDTO.setPassword(pass);
            } catch (NoSuchAlgorithmException e) {
                e.printStackTrace();
            }
            User user = new User();
            BeanUtils.copyProperties(userDTO, user);
            userRepository.save(user);
            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }


    private String cryptWithMD5(String pass) throws NoSuchAlgorithmException {
         MessageDigest md;
        md = MessageDigest.getInstance("MD5");
        byte[] passBytes = pass.getBytes();
        md.reset();
        byte[] digested = md.digest(passBytes);
        StringBuffer sb = new StringBuffer();
        for(int i=0;i<digested.length;i++){
            sb.append(Integer.toHexString(0xff & digested[i]));
        }
        return sb.toString();

    }

    @Override
    public Boolean LoginFetchUserDetails(String userID, String userPasswd) {


        User user = userRepository.findOne(userID);
        String password=null;

        if(user==null){
            return Boolean.FALSE;
        }
        try {
            password=cryptWithMD5(userPasswd);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        if(userID.equals(user.getEmail()) && password.equals(user.getPassword())){

            return Boolean.TRUE;
        }
        return Boolean.FALSE;
    }

    @Override
    public UserDTO retriveUserDetails(String email) {


        List<User> userList=new ArrayList<>();
        Iterable<User> userIterable = userRepository.findAll();
        userIterable.forEach(userList::add);

        for(User user:userList){

            UserDTO userDTO=new UserDTO();
            BeanUtils.copyProperties(user,userDTO);
            String mail=user.getEmail();
            if(mail.equals(email)) {

                return userDTO;
            }
        }

        return null;

    }




}

