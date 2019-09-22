package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.VideoCommentReply;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface VideoCommentReplyMapper {
    List<VideoCommentReply> getAllViReply(Integer commentId);

    int deleteByPrimaryKey(Integer replyId);

    int insert(VideoCommentReply record);

    int insertSelective(VideoCommentReply record);

    VideoCommentReply selectByPrimaryKey(Integer replyId);

    int updateByPrimaryKeySelective(VideoCommentReply record);

    int updateByPrimaryKey(VideoCommentReply record);
}