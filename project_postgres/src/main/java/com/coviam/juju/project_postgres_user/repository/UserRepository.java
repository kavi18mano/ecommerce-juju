package com.coviam.juju.project_postgres_user.repository;

import com.coviam.juju.project_postgres_user.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserRepository extends CrudRepository<User,String> {


    List<User> findByEmail(String email);

}
