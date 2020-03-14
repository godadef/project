package com.ht.htsys.pojo;

public class WorkPlan {
    private Integer level1SystemId;
    private Integer typeId;
    private Integer site;
    private String name;
    private Integer planDay;
    private Integer totalDay;
    private Double money;
    private Integer num;

    public Integer getLevel1SystemId() {
        return level1SystemId;
    }

    public void setLevel1SystemId(Integer level1SystemId) {
        this.level1SystemId = level1SystemId;
    }

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }

    public Integer getSite() {
        return site;
    }

    public void setSite(Integer site) {
        this.site = site;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPlanDay() {
        return planDay;
    }

    public void setPlanDay(Integer planDay) {
        this.planDay = planDay;
    }

    public Integer getTotalDay() {
        return totalDay;
    }

    public void setTotalDay(Integer totalDay) {
        this.totalDay = totalDay;
    }

    public Double getMoney() {
        return money;
    }

    public void setMoney(Double money) {
        this.money = money;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    @Override
    public String toString() {
        return "WorkPlan{" +
                "level1SystemId=" + level1SystemId +
                ", typeId=" + typeId +
                ", site=" + site +
                ", name='" + name + '\'' +
                ", planDay=" + planDay +
                ", totalDay=" + totalDay +
                ", money=" + money +
                ", num=" + num +
                '}';
    }
}
