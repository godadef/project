package com.gec.gmall.manage.bean;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

public class PmsSkuInfo implements Serializable {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    @Column(name = "product_id")
    private String spuId;
    @Column
    private BigDecimal price;
    @Column
    private String skuName;
    @Column
    private String skuDesc;
    @Column
    private String weight;
    @Column
    private String tmId;
    @Column
    private String catalog3Id;
    @Column
    private String skuDefaultImg;

    @Transient
    private List<PmsSkuAttrValue> skuAttrValueList;
    @Transient
    private List<PmsSkuSaleAttrValue> skuSaleAttrValueList;
    @Transient
    private List<PmsSkuImage> skuImageList;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSpuId() {
        return spuId;
    }

    public void setSpuId(String spuId) {
        this.spuId = spuId;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getSkuName() {
        return skuName;
    }

    public void setSkuName(String skuName) {
        this.skuName = skuName;
    }

    public String getSkuDesc() {
        return skuDesc;
    }

    public void setSkuDesc(String skuDesc) {
        this.skuDesc = skuDesc;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getTmId() {
        return tmId;
    }

    public void setTmId(String tmId) {
        this.tmId = tmId;
    }

    public String getCatalog3Id() {
        return catalog3Id;
    }

    public void setCatalog3Id(String catalog3Id) {
        this.catalog3Id = catalog3Id;
    }

    public String getSkuDefaultImg() {
        return skuDefaultImg;
    }

    public void setSkuDefaultImg(String skuDefaultImg) {
        this.skuDefaultImg = skuDefaultImg;
    }

    public List<PmsSkuAttrValue> getSkuAttrValueList() {
        return skuAttrValueList;
    }

    public void setSkuAttrValueList(List<PmsSkuAttrValue> skuAttrValueList) {
        this.skuAttrValueList = skuAttrValueList;
    }

    public List<PmsSkuSaleAttrValue> getSkuSaleAttrValueList() {
        return skuSaleAttrValueList;
    }

    public void setSkuSaleAttrValueList(List<PmsSkuSaleAttrValue> skuSaleAttrValueList) {
        this.skuSaleAttrValueList = skuSaleAttrValueList;
    }

    public List<PmsSkuImage> getSkuImageList() {
        return skuImageList;
    }

    public void setSkuImageList(List<PmsSkuImage> skuImageList) {
        this.skuImageList = skuImageList;
    }

    @Override
    public String toString() {
        return "PmsSkuInfo{" +
                "id='" + id + '\'' +
                ", spuId='" + spuId + '\'' +
                ", price=" + price +
                ", skuName='" + skuName + '\'' +
                ", skuDesc='" + skuDesc + '\'' +
                ", weight='" + weight + '\'' +
                ", tmId='" + tmId + '\'' +
                ", catalog3Id='" + catalog3Id + '\'' +
                ", skuDefaultImg='" + skuDefaultImg + '\'' +
                ", skuAttrValueList=" + skuAttrValueList +
                ", skuSaleAttrValueList=" + skuSaleAttrValueList +
                ", skuImageList=" + skuImageList +
                '}';
    }
}
