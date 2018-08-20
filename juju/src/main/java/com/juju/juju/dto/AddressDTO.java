package com.juju.juju.dto;

import java.util.Objects;

public class AddressDTO {
    private String userEmailid;
    private String streetName;
    private String city;
    private Long pincode;
    private String orderid;

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
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AddressDTO that = (AddressDTO) o;
        return Objects.equals(userEmailid, that.userEmailid) &&
                Objects.equals(streetName, that.streetName) &&
                Objects.equals(city, that.city) &&
                Objects.equals(pincode, that.pincode) &&
                Objects.equals(orderid, that.orderid);
    }

    @Override
    public int hashCode() {

        return Objects.hash(userEmailid, streetName, city, pincode, orderid);
    }

    @Override
    public String
    toString() {
        return "\nAddress Details\n" +
                "\nuserEmailid = " + userEmailid + '\n' +
                "\n streetName = " + streetName + '\n' +
                "\n city = " + city + '\n' +
                "\n pincode = " + pincode ;
    }
}
