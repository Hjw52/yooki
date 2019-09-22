package org.lanqiao.yk.controller;

import org.lanqiao.yk.entity.VideoInfo;
import org.lanqiao.yk.service.UserCollectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserCollectController {
    @Autowired
    UserCollectService ucs;
    @RequestMapping("/searchvideo")
    public int searchvideo(Integer userId){
        return ucs.searchvideo(userId);
    }
    @RequestMapping("/showAllvideo")
    public List<VideoInfo> showAllvideo(Integer userId){
        return ucs.showAllvideo(userId);
    }
    @RequestMapping("/showAllcollect")
    public List<VideoInfo> showAllcollect(Integer userId){
        return ucs.showAllcollect(userId);
    }
    @RequestMapping("/searchusername")
    public String searchusername(Integer userId){
        return ucs.searchusername(userId);
    }
    @RequestMapping("/searchuserintro")
    public String searchuserintro(Integer userId){
        return ucs.searchuserintro(userId);
    }
    @RequestMapping("/searchfacepic")
    public String searchfacepic(Integer userId){
        return ucs.searchfacepic(userId);
    }
    @RequestMapping("/searchuserurl")
    public String searchuserurl(Integer userId){
        return ucs.searchuserurl(userId);
    }
    @RequestMapping("/searchfans")
    public int searchfans(Integer userId){
        return ucs.searchfans(userId);
    }
    @RequestMapping("/searchidol")
    public int searchidol(Integer userId){
        return ucs.searchidol(userId);
    }
    @RequestMapping("/searchdynamic")
    public int searchdynamic(Integer userId){
        return ucs.searchdynamic(userId);
    }
    @RequestMapping("/searchcollect")
    public int searchcollect(Integer userId){
        return ucs.searchcollect(userId);
    }
}
