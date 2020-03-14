package com.ht.htsys.pojo;

public class SecondarySystemJob {
    private Integer SecondarySystemId;
    private Integer site;
    private Integer planDay;
    private Integer totalDay;
    private Integer money;
    private Integer num;

    public Integer getSecondarySystemId() {
        return SecondarySystemId;
    }

    public void setSecondarySystemId(Integer secondarySystemId) {
        SecondarySystemId = secondarySystemId;
    }

    public Integer getSite() {
        return site;
    }

    public void setSite(Integer site) {
        this.site = site;
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

    public Integer getMoney() {
        return money;
    }

    public void setMoney(Integer money) {
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
        return "SecondarySystemJob{" +
                "SecondarySystemId=" + SecondarySystemId +
                ", site=" + site +
                ", planDay=" + planDay +
                ", totalDay=" + totalDay +
                ", money=" + money +
                ", num=" + num +
                '}';
    }
}
