package org.lanqiao.yk.controller;

import org.lanqiao.yk.entity.VideoInfo;
import org.lanqiao.yk.service.DynamicInfoService;
import org.lanqiao.yk.service.UserCollectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserCollectController {
    @Autowired
    UserCollectService ucs;
    @Autowired
    DynamicInfoService dis;
    @Autowired
    UserFocusService ufs;
    @Autowired
    UserInfoService uis;
    @Autowired
    VideoInfoService vis;
    @RequestMapping("/searchvideo")
    public int searchvideo(Integer userId){
        return vis.searchvideo(userId);
    }
    @RequestMapping("/showAllvideo")
    public List<VideoInfo> showAllvideo(Integer userId){
        return vis.showAllvideo(userId);
    }
    @RequestMapping("/showAllcollect")
    public List<VideoInfo> showAllcollect(Integer userId){
        return vis.showAllcollect(userId);
    }
    @RequestMapping("/searchusername")
    public String searchusername(Integer userId){
        return uis.searchusername(userId);
    }
    @RequestMapping("/searchuserintro")
    public String searchuserintro(Integer userId){
        return uis.searchuserintro(userId);
    }
    @RequestMapping("/searchfacepic")
    public String searchfacepic(Integer userId){
        return uis.searchfacepic(userId);
    }
    @RequestMapping("/searchuserurl")
    public String searchuserurl(Integer userId){
        return uis.searchuserurl(userId);
    }
    @RequestMapping("/searchfans")
    public int searchfans(Integer userId){
        return ufs.searchfans(userId);
    }
    @RequestMapping("/searchidol")
    public int searchidol(Integer userId){
        return ufs.searchidol(userId);
    }
    @RequestMapping("/searchdynamic")
    public int searchdynamic(Integer userId){
        return dis.searchdynamic(userId);
    }
    @RequestMapping("/searchcollect")
    public int searchcollect(Integer userId){
        return ucs.searchcollect(userId);
    }
}
