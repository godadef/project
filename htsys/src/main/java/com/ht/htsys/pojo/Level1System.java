package com.ht.htsys.pojo;

import java.util.Date;

public class Level1System {
    private Integer level1SystemId;
    private String projectName;
    private String customerName;
    private String headName;
    private String headPhone;
    private String headEmail;
    private Date deliveryTime;
    private String deliveryPlace;
    private String deliverables;
    private String deliveryWay;
    private String state;
    private Date createDate;
    private Integer modeId;

    public Integer getLevel1SystemId() {
        return level1SystemId;
    }

    public void setLevel1SystemId(Integer level1SystemId) {
        this.level1SystemId = level1SystemId;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getHeadName() {
        return headName;
    }

    public void setHeadName(String headName) {
        this.headName = headName;
    }

    public String getHeadPhone() {
        return headPhone;
    }

    public void setHeadPhone(String headPhone) {
        this.headPhone = headPhone;
    }

    public String getHeadEmail() {
        return headEmail;
    }

    public void setHeadEmail(String headEmail) {
        this.headEmail = headEmail;
    }

    public Date getDeliveryTime() {
        return deliveryTime;
    }

    public void setDeliveryTime(Date deliveryTime) {
        this.deliveryTime = deliveryTime;
    }

    public String getDeliveryPlace() {
        return deliveryPlace;
    }

    public void setDeliveryPlace(String deliveryPlace) {
        this.deliveryPlace = deliveryPlace;
    }

    public String getDeliverables() {
        return deliverables;
    }

    public void setDeliverables(String deliverables) {
        this.deliverables = deliverables;
    }

    public String getDeliveryWay() {
        return deliveryWay;
    }

    public void setDeliveryWay(String deliveryWay) {
        this.deliveryWay = deliveryWay;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Integer getModeId() {
        return modeId;
    }

    public void setModeId(Integer modeId) {
        this.modeId = modeId;
    }

    @Override
    public String toString() {
        return "Level1System{" +
                "level1SystemId=" + level1SystemId +
                ", projectName='" + projectName + '\'' +
                ", customerName='" + customerName + '\'' +
                ", headName='" + headName + '\'' +
                ", headPhone='" + headPhone + '\'' +
                ", headEmail='" + headEmail + '\'' +
                ", deliveryTime=" + deliveryTime +
                ", deliveryPlace='" + deliveryPlace + '\'' +
                ", deliverables='" + deliverables + '\'' +
                ", deliveryWay='" + deliveryWay + '\'' +
                ", state='" + state + '\'' +
                ", createDate=" + createDate +
                ", modeId=" + modeId +
                '}';
    }
}
