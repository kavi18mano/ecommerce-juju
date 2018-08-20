package com.juju.juju.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name=Address.TABLE_NAME)
public class Address {


    public static final String TABLE_NAME="adresstable";
    private static final String EMAIL_COLUMN="userEmailid";
    private static final String STREET_COLUMN="streetName";
    private static final String CITY_COLUMN="city";
    private static final String PINCODE_COLUMN="pincode";
    private static final String ORDERID ="orderid";



    @Id
    @Column(name = Address.ORDERID)
    private String orderid;

    @Column(name = Address.EMAIL_COLUMN)
    private String userEmailid;

    @Column(name = Address.STREET_COLUMN)
    private String streetName;

    @Column(name = Address.CITY_COLUMN)
    private String city;

    @Column(name = Address.PINCODE_COLUMN)
    private Long pincode;


    public String getUserEmailid() {
        return userEmailid;
    }

    public void setUserEmailid(String userEmailid) {
        this.userEmailid = userEmailid;
    }

    public String getStreetName() {
        return streetName;
    }

    public void setStreetName(String streetName) {
        this.streetName = streetName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }


    public Long getPincode() {
        return pincode;
    }

    public void setPincode(Long pincode) {
        this.pincode = pincode;
    }

    public String getOrderid() {
        return orderid;
    }

    public void setOrderid(String orderid) {
        this.orderid = orderid;
    }

    @Override
    public String toString() {
        return "\nAddress Details\n" +
                "\nuserEmailid= " + userEmailid + '\n' +
                "\n streetName= " + streetName + '\n' +
                "\n city= " + city + '\n' +
                "\n pincode= " + pincode ;

    }
}
