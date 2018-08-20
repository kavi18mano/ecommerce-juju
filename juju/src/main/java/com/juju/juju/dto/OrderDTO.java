package com.juju.juju.dto;

public class OrderDTO {


    private String orderID;
    private String emailid;
    private Double price;
    private String productName;
    private Integer quantity;
    private String merchantName;
    private String date;

    public String getOrderID() {
        return orderID;
    }

    public void setOrderID(String orderID) {
        this.orderID = orderID;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getMerchantName() {
        return merchantName;
    }

    public void setMerchantName(String merchantName) {
        this.merchantName = merchantName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
                "orderID='" + orderID + '\'' +
                ", emailid='" + emailid + '\'' +
                ", price=" + price +
                ", productName='" + productName + '\'' +
                ", quantity=" + quantity +
                ", merchantName='" + merchantName + '\'' +
                ", date='" + date + '\'' +
                '}';
    }

    public OrderDTO() {
    }
}
