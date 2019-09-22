package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.VideoInfo;
import org.lanqiao.yk.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserCollectServiceImpl implements UserCollectService {
    @Autowired
    UserCollectMapper ucm;
    @Autowired
    DynamicInfoMapper dim;
    @Autowired
    UserFocusMapper ufm;
    @Autowired
    UserInfoMapper uim;
    @Autowired
    VideoInfoMapper vim;
    @Override
    public int searchvideo(Integer userId){
        return vim.searchvideo(userId);
    }

    @Override
    public List<VideoInfo> showAllvideo(Integer userId){
        return vim.showAllvideo(userId);
    }

    @Override
    public List<VideoInfo> showAllcollect(Integer userId){
        return vim.showAllcollect(userId);
    }
    @Override
    public String searchusername(Integer userId){
        return uim.searchusername(userId);
    }
    @Override
    public String searchuserintro(Integer userId){
        return uim.searchuserintro(userId);
    }
    @Override
    public String searchfacepic(Integer userId){
        return uim.searchfacepic(userId);
    }
    @Override
    public String searchuserurl(Integer userId){
        return uim.searchuserurl(userId);
    }
    @Override
    public int searchfans(Integer userId){
        return ufm.searchfans(userId);
    }
    @Override
    public int searchidol(Integer userId){
        return ufm.searchidol(userId);
    }
    @Override
    public int searchdynamic(Integer userId){
        return dim.searchdynamic(userId);
    }
    @Override
    public int searchcollect(Integer userId){
        return ucm.searchcollect(userId);
    }
}
