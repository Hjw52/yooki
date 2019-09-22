package org.lanqiao.yk.entity;

import org.springframework.stereotype.Repository;

@Repository
public class VideoPicMov {
    private Integer picMovId;

    private String videoPic;

    private String videoMov;

    private Integer videoId;

    public Integer getPicMovId() {
        return picMovId;
    }

    public void setPicMovId(Integer picMovId) {
        this.picMovId = picMovId;
    }

    public String getVideoPic() {
        return videoPic;
    }

    public void setVideoPic(String videoPic) {
        this.videoPic = videoPic == null ? null : videoPic.trim();
    }

    public String getVideoMov() {
        return videoMov;
    }

    public void setVideoMov(String videoMov) {
        this.videoMov = videoMov == null ? null : videoMov.trim();
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }
}