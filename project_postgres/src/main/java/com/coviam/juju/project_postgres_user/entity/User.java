package com.coviam.juju.project_postgres_user.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name=User.TABLE_NAME)

public class User {

    public static final String TABLE_NAME="usertable";
    private static final String FIRSTNAME_COLUMN="firstname";
    private static final String LASTNAME_COLUMN="lastname";
    private static final String PHONE_COLUMN="phoneNumber";
    private static final String EMAIL_COLUMN="email";
    private static final String PASSWORD_COLUMN="password";




    @Id
    @Column(name = User.EMAIL_COLUMN)
    private String email;

    @Column(name = User.FIRSTNAME_COLUMN)
    private String firstName;

    @Column(name = User.LASTNAME_COLUMN)
    private String lastName;

    @Column(name = User.PHONE_COLUMN)
    private Long phoneNumber;

    @Column(name = User.PASSWORD_COLUMN)
    private String password;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
