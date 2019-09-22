package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.*;
import org.lanqiao.yk.mapper.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VideoBarrageServiceImp implements VideoBarrageService {
    @Autowired
    VideoBarrageMapper videoBarrageMapper;
    @Autowired
    VideoCommentMapper videoCommentMapper;
    @Autowired
    VideoCommentReplyMapper videoCommentReplyMapper;
    @Autowired
    VideoInfoMapper videoInfoMapper;
    @Autowired
    UserCollectMapper userCollectMapper;
    @Autowired
    UserFocusMapper userFocusMapper;
    @Autowired
    UserInfoMapper userInfoMapper;
    @Autowired
    UserHistoryMapper userHistoryMapper;

    @Override
    public int insertHistory(UserHistory userHistory) {
        return userHistoryMapper.insertSelective(userHistory);
    }

    @Override
    public UserInfo selectByPrimaryKey(Integer userId) {
        return userInfoMapper.selectByPrimaryKey(userId);
    }

    @Override
    public int addBrowse(Integer videoId) {
        return videoInfoMapper.addBrowse(videoId);
    }

    @Override
    public int deleteFocus(UserFocus userFocus) {
        return userFocusMapper.deleteFocus(userFocus);
    }

    @Override
    public int checkFocus(UserFocus userFocus) {
        return userFocusMapper.checkFocus(userFocus);
    }

    @Override
    public int addFocus(UserFocus userFocus) {
        return userFocusMapper.insertSelective(userFocus);
    }

    @Override
    public int deleteCollect(UserCollect userCollect) {
        return userCollectMapper.deleteCollect(userCollect);
    }

    @Override
    public int checkCollect(UserCollect userCollect) {
        return userCollectMapper.checkCollect(userCollect);
    }

    @Override
    public int addCollect(UserCollect userCollect) {
        return userCollectMapper.insertSelective(userCollect);
    }

    @Override
    public int dislike(Integer commentId) {
        return videoCommentMapper.dislike(commentId);
    }

    @Override
    public int like(Integer commentId) {
        return videoCommentMapper.like(commentId);
    }

    @Override
    public VideoInfo getVideo(Integer videoId) {
        return videoInfoMapper.getVideo(videoId);
    }

    @Override
    public int insertViReply(VideoCommentReply reply) {
        return videoCommentReplyMapper.insertSelective(reply);
    }

    @Override
    public List<VideoCommentReply> getAllViReply(Integer commentId) {
        return videoCommentReplyMapper.getAllViReply(commentId);
    }

    @Override
    public List<VideoComment> getAllComment(Integer videoId) {
        return videoCommentMapper.getAllComment(videoId);
    }

    @Override
    public int vCommentSubmit(VideoComment videoComment) {
        return videoCommentMapper.insertSelective(videoComment);
    }

    @Override
    public List<VideoBarrage> getAllBarrage(String videoId) {
        return videoBarrageMapper.getAllBarrage(videoId);
    }

    @Override
    public int insertBarrage(VideoBarrage videoBarrage) {
        return videoBarrageMapper.insertSelective(videoBarrage);
    }
}
