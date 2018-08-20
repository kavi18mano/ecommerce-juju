package com.juju.juju.service.Impl;

public class MerchantDuplicate {
    private String merchantname;
    private String name;
    private int price;

    public String getMerchantname() {
        return merchantname;
    }

    public void setMerchantname(String merchantname) {
        this.merchantname = merchantname;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "MerchantDuplicate{" +
                "merchantname='" + merchantname + '\'' +
                ", name='" + name + '\'' +
                ", price=" + price +
                '}';
    }
}
