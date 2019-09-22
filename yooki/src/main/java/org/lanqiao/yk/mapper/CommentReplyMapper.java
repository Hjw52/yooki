package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.CommentReply;

public interface CommentReplyMapper {
    int deleteByPrimaryKey(Integer replyId);

    int insert(CommentReply record);

    int insertSelective(CommentReply record);

    CommentReply selectByPrimaryKey(Integer replyId);

    int updateByPrimaryKeySelective(CommentReply record);

    int updateByPrimaryKey(CommentReply record);
}