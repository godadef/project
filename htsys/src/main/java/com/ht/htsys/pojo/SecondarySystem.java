package com.ht.htsys.pojo;

public class SecondarySystem {
    private Integer secondarySystemId;
    private Integer tableId;
    private Integer typeId;
    private String funMsg;
    private String funName;
    private Integer funNum;

    public Integer getSecondarySystemId() {
        return secondarySystemId;
    }

    public void setSecondarySystemId(Integer secondarySystemId) {
        this.secondarySystemId = secondarySystemId;
    }

    public Integer getTableId() {
        return tableId;
    }

    public void setTableId(Integer tableId) {
        this.tableId = tableId;
    }

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }

    public String getFunMsg() {
        return funMsg;
    }

    public void setFunMsg(String funMsg) {
        this.funMsg = funMsg;
    }

    public String getFunName() {
        return funName;
    }

    public void setFunName(String funName) {
        this.funName = funName;
    }

    public Integer getFunNum() {
        return funNum;
    }

    public void setFunNum(Integer funNum) {
        this.funNum = funNum;
    }

    @Override
    public String toString() {
        return "SecondarySystem{" +
                "secondarySystemId=" + secondarySystemId +
                ", tableId=" + tableId +
                ", typeId=" + typeId +
                ", funMsg='" + funMsg + '\'' +
                ", funName='" + funName + '\'' +
                ", funNum=" + funNum +
                '}';
    }
}
