package com.gec.gmall.manage.bean;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class PmsBaseAttrValue implements Serializable {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    @Column
    private String valueName;
    @Column
    private String attrId;
    @Column
    private String isEnabled;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getValueName() {
        return valueName;
    }
    public void setValueName(String valueName) {
        this.valueName = valueName;
    }
    public String getAttrId() {
        return attrId;
    }
    public void setAttrId(String attrId) {
        this.attrId = attrId;
    }
    public String getIsEnabled() {
        return isEnabled;
    }
    public void setIsEnabled(String isEnabled) {
        this.isEnabled = isEnabled;
    }
    @Override
    public String toString() {
        return "PmsBaseAttrValue{" +
                "id='" + id + '\'' +
                ", valueName='" + valueName + '\'' +
                ", attrId='" + attrId + '\'' +
                ", isEnabled='" + isEnabled + '\'' +
                '}';
    }
}
