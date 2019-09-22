package org.lanqiao.yk.entity;

import java.util.Date;

public class DynamicInfo {
    private Integer dynamicId;

    private Date dynamicTime;

    private String dynamicText;

    private String dynamicImage;

    private String dynamicVideo;

    private Integer likeNumber;

    private Integer userId;

    private Integer transmitDynamicId;

    private UserInfo userInfo;

    public UserInfo getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
    }

    public Integer getDynamicId() {
        return dynamicId;
    }

    public void setDynamicId(Integer dynamicId) {
        this.dynamicId = dynamicId;
    }

    public Date getDynamicTime() {
        return dynamicTime;
    }

    public void setDynamicTime(Date dynamicTime) {
        this.dynamicTime = dynamicTime;
    }

    public String getDynamicText() {
        return dynamicText;
    }

    public void setDynamicText(String dynamicText) {
        this.dynamicText = dynamicText == null ? null : dynamicText.trim();
    }

    public String getDynamicImage() {
        return dynamicImage;
    }

    public void setDynamicImage(String dynamicImage) {
        this.dynamicImage = dynamicImage == null ? null : dynamicImage.trim();
    }

    public String getDynamicVideo() {
        return dynamicVideo;
    }

    public void setDynamicVideo(String dynamicVideo) {
        this.dynamicVideo = dynamicVideo == null ? null : dynamicVideo.trim();
    }

    public Integer getLikeNumber() {
        return likeNumber;
    }

    public void setLikeNumber(Integer likeNumber) {
        this.likeNumber = likeNumber;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getTransmitDynamicId() {
        return transmitDynamicId;
    }

    public void setTransmitDynamicId(Integer transmitDynamicId) {
        this.transmitDynamicId = transmitDynamicId;
    }
}