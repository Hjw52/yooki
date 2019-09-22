package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.VideoComment;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoCommentMapper {
    int dislike(Integer commentId);

    int like(Integer commentId);

    List<VideoComment> getAllComment(Integer videoId);

    int deleteByPrimaryKey(Integer commentId);

    int insert(VideoComment record);

    int insertSelective(VideoComment record);

    VideoComment selectByPrimaryKey(Integer commentId);

    int updateByPrimaryKeySelective(VideoComment record);

    int updateByPrimaryKey(VideoComment record);
}