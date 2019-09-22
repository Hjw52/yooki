package org.lanqiao.yk.entity;

import java.util.Date;

public class UserHistory {
    private Integer historyId;

    private Integer userId;

    private Integer videoId;

    private Integer passtime;

    private Date seeTime;
    private VideoInfo videoInfo;
    private VideoPicMov videoPicMov;

    public VideoInfo getVideoInfo() {
        return videoInfo;
    }

    public void setVideoInfo(VideoInfo videoInfo) {
        this.videoInfo = videoInfo;
    }

    public VideoPicMov getVideoPicMov() {
        return videoPicMov;
    }

    public void setVideoPicMov(VideoPicMov videoPicMov) {
        this.videoPicMov = videoPicMov;
    }

    public Integer getHistoryId() {
        return historyId;
    }

    public void setHistoryId(Integer historyId) {
        this.historyId = historyId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public Integer getPasstime() {
        return passtime;
    }

    public void setPasstime(Integer passtime) {
        this.passtime = passtime;
    }

    public Date getSeeTime() {
        return seeTime;
    }

    public void setSeeTime(Date seeTime) {
        this.seeTime = seeTime;
    }
}