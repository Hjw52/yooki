package org.lanqiao.yk.controller;


import org.lanqiao.yk.entity.*;
import org.lanqiao.yk.mapper.VideoCommentMapper;
import org.lanqiao.yk.service.VideoBarrageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class DoVideoController {
    @Autowired
    VideoBarrageService videoBarrageService;
    @Autowired
    VideoCommentMapper videoCommentMapper;

    @RequestMapping("/insertHistory")
    public int insertHistory(UserHistory userHistory) {
        return videoBarrageService.insertHistory(userHistory);
    }
    @RequestMapping("/selectByPrimaryKey")
    public UserInfo selectByPrimaryKey(Integer userId) {
        return videoBarrageService.selectByPrimaryKey(userId);
    }
    @RequestMapping("/addBrowse")
    public int addBrowse(Integer videoId) {
        return videoBarrageService.addBrowse(videoId);
    }
    @RequestMapping("/deleteFocus")
    public int deleteFocus(UserFocus userFocus) {
        return videoBarrageService.deleteFocus(userFocus);
    }
    @RequestMapping("/checkFocus")
    public int checkFocus(UserFocus userFocus) {
        return videoBarrageService.checkFocus(userFocus);
    }
    @RequestMapping("/addFocus")
    public int addFocus(UserFocus userFocus) {
        return videoBarrageService.addFocus(userFocus);
    }
    @RequestMapping("/deleteCollect")
    public int deleteCollect(UserCollect userCollect) {
        return videoBarrageService.deleteCollect(userCollect);
    }
    @RequestMapping("/checkCollect")
    public int checkCollect(UserCollect userCollect) {
        return videoBarrageService.checkCollect(userCollect);
    }
    @RequestMapping("/addCollect")
    public int addCollect(UserCollect userCollect) {
        return videoBarrageService.addCollect(userCollect);
    }
    @RequestMapping("/dislike")
    public int dislike(Integer commentId) {
        return videoBarrageService.dislike(commentId);
    }
    @RequestMapping("/like")
    public int like(Integer commentId) {
        return videoBarrageService.like(commentId);
    }
    //获取视频信息
    @RequestMapping("/getVideo")
    public VideoInfo getVideo(Integer videoId) {
        return videoBarrageService.getVideo(videoId);
    }
    //插入视频评论回复
    @RequestMapping("/insertViReply")
    public int insertViReply(VideoCommentReply reply) {
        return videoBarrageService.insertViReply(reply);
    }
    //得到所有回复
    @RequestMapping("/getAllViReply")
    public List<VideoCommentReply> getAllViReply(Integer commentId) {
        return videoBarrageService.getAllViReply(commentId);
    }

    @RequestMapping("/getAllComment")
    public List<VideoComment> getAllComment(Integer videoId) {
        return videoCommentMapper.getAllComment(videoId);
    }

    @RequestMapping("/vCommentSubmit")
    public int vCommentSubmit(VideoComment videoComment) {
        return videoCommentMapper.insertSelective(videoComment);
    }

    @RequestMapping("/insertBarrage")
    public int insertBarrage(VideoBarrage videoBarrage) {
        return videoBarrageService.insertBarrage(videoBarrage);
    }

    @RequestMapping("/getAllBarrage")
    public List<VideoBarrage> getAllBarrage(String videoId) {
        return videoBarrageService.getAllBarrage(videoId);
    }
}
