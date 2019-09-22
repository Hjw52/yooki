package org.lanqiao.yk.entity;

public class VideoBarrage {
    private Integer barrageId;

    private String value;

    private String color;

    private Float time;

    private Integer videoId;

    private Integer userId;

    public Integer getBarrageId() {
        return barrageId;
    }

    public void setBarrageId(Integer barrageId) {
        this.barrageId = barrageId;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value == null ? null : value.trim();
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color == null ? null : color.trim();
    }

    public Float getTime() {
        return time;
    }

    public void setTime(Float time) {
        this.time = time;
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}