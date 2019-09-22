package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.VideoInfo;

import java.util.List;

public interface UserCollectService {
    public int searchcollect(Integer userId);
    public int searchdynamic(Integer userId);
    public int searchfans(Integer userId);
    public int searchidol(Integer userId);
    public String searchusername(Integer userId);
    public String searchuserintro(Integer userId);
    public String searchfacepic(Integer userId);
    public String searchuserurl(Integer userId);
    public int searchvideo(Integer userId);
    public List<VideoInfo> showAllvideo(Integer userId);
    public List<VideoInfo> showAllcollect(Integer userId);
}
