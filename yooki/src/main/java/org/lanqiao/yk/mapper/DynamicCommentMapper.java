package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.DynamicComment;

import java.util.List;

public interface DynamicCommentMapper {
    int deleteByPrimaryKey(Integer commentId);

    int insert(DynamicComment record);

    int insertSelective(DynamicComment record);

    DynamicComment selectByPrimaryKey(Integer commentId);

    int updateByPrimaryKeySelective(DynamicComment record);

    int updateByPrimaryKey(DynamicComment record);

    List<DynamicComment> getComment(Integer id);

    int insertComment(DynamicComment record);

    int commentNum(Integer id);
}