package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.*;

import java.util.List;

public interface VideoBarrageService {
    int insertHistory (UserHistory userHistory);

    UserInfo selectByPrimaryKey(Integer userId);

    int addBrowse (Integer videoId);

    int deleteFocus(UserFocus userFocus);

    int checkFocus(UserFocus userFocus);

    int addFocus(UserFocus userFocus);

    int deleteCollect(UserCollect userCollect);

    int checkCollect(UserCollect userCollect);

    int addCollect(UserCollect userCollect);

    int dislike(Integer commentId);

    int like(Integer commentId);

    VideoInfo getVideo(Integer videoId);

    int insertViReply(VideoCommentReply reply);

    List<VideoCommentReply> getAllViReply(Integer commentId);

    List<VideoComment> getAllComment(Integer videoId);

    int vCommentSubmit(VideoComment videoComment);

    List<VideoBarrage> getAllBarrage(String videoId);

    int insertBarrage(VideoBarrage videoBarrage);
}
