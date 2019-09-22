package org.lanqiao.yk.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.solr.core.mapping.Indexed;
import org.springframework.stereotype.Repository;

import java.util.Date;
@Repository
public class VideoInfo {
    @Id
    @Indexed
    private Integer id;
    @Indexed
    private String videoName;
    @Indexed
    private String videoDescript;
    @Indexed
    private Date videoCreateTime;
    @Indexed
    private String videoDirector;
    @Indexed
    private String videoActor;
    @Indexed
    private String videoPic;
    @Indexed
    private String category;

    private Integer videoId;

    private Date videoDuration;

    private Integer isVipVideo;

    private Integer isAuditing;

    private UserInfo userInfo;

    private Integer videoBrowse;

    private VideoPicMov videoPicMov;

    private Integer userId;

    private UserCollect userCollect;

    public UserCollect getUserCollect() {
        return userCollect;
    }

    public void setUserCollect(UserCollect userCollect) {
        this.userCollect = userCollect;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public VideoPicMov getVideoPicMov() {
        return videoPicMov;
    }

    public void setVideoPicMov(VideoPicMov videoPicMov) {
        this.videoPicMov = videoPicMov;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getVideoId() {
        return videoId;
    }

    public void setVideoId(Integer videoId) {
        this.videoId = videoId;
    }

    public String getVideoName() {
        return videoName;
    }

    public void setVideoName(String videoName) {
        this.videoName = videoName == null ? null : videoName.trim();
    }

    public String getVideoDescript() {
        return videoDescript;
    }

    public void setVideoDescript(String videoDescript) {
        this.videoDescript = videoDescript == null ? null : videoDescript.trim();
    }

    public Date getVideoDuration() {
        return videoDuration;
    }

    public void setVideoDuration(Date videoDuration) {
        this.videoDuration = videoDuration;
    }

    public Date getVideoCreateTime() {
        return videoCreateTime;
    }

    public void setVideoCreateTime(Date videoCreateTime) {
        this.videoCreateTime = videoCreateTime;
    }

    public Integer getIsVipVideo() {
        return isVipVideo;
    }

    public void setIsVipVideo(Integer isVipVideo) {
        this.isVipVideo = isVipVideo;
    }

    public Integer getIsAuditing() {
        return isAuditing;
    }

    public void setIsAuditing(Integer isAuditing) {
        this.isAuditing = isAuditing;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category == null ? null : category.trim();
    }

    public UserInfo getUserInfo() {
        return userInfo;
    }

    public void setUserInfo(UserInfo userInfo) {
        this.userInfo = userInfo;
    }

    public Integer getVideoBrowse() {
        return videoBrowse;
    }

    public void setVideoBrowse(Integer videoBrowse) {
        this.videoBrowse = videoBrowse;
    }

    public String getVideoPic() {
        return videoPic;
    }

    public void setVideoPic(String videoPic) {
        this.videoPic = videoPic == null ? null : videoPic.trim();
    }

    public String getVideoDirector() {
        return videoDirector;
    }

    public void setVideoDirector(String videoDirector) {
        this.videoDirector = videoDirector == null ? null : videoDirector.trim();
    }

    public String getVideoActor() {
        return videoActor;
    }

    public void setVideoActor(String videoActor) {
        this.videoActor = videoActor == null ? null : videoActor.trim();
    }
}