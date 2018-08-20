package com.juju.juju.entity;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;


@Entity
@Table(name=Order.TABLE_NAME)
public class Order {




    public static final String TABLE_NAME="usertable";
    private static final String ORDER_COLUMN="orderID";
    private static final String PRICE_COLUMN="price";
    private static final String PRODUCT_COLUMN="productName";
    private static final String QUANTITY_COLUMN="quantity";
    private static final String EMAIL_COLUMN="email";
    private static final String MERCHANT_COLUMN="merchantName";
    private static final String DATE_COLUMN="date";


    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Id
    @Column(name = Order.ORDER_COLUMN)
    private String orderID;

    @Column(name = Order.EMAIL_COLUMN)
    private String emailid;

    @Column(name = Order.PRICE_COLUMN)
    private Double price;

    @Column(name = Order.PRODUCT_COLUMN)
    private String productName;

    @Column(name = Order.QUANTITY_COLUMN)
    private Integer quantity;

    @Column(name = Order.MERCHANT_COLUMN)
    private String merchantName;

    @Column(name = Order.DATE_COLUMN)
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
        return "\nOrder Details\n" +
                "\norderID = " + orderID + '\n' +
                "\n emailid = " + emailid + '\n' +
                "\n price = ₹ " + price +'\n'+
                "\n productName = " + productName + '\n' +
                "\n quantity = " + quantity +'\n'+
                "\n merchantName = " + merchantName + '\n' +
                "\n date = " + date + '\n' ;
    }
}
