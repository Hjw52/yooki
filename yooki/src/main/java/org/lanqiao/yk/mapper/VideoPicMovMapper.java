package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.VideoPicMov;

public interface VideoPicMovMapper {
    int deleteByPrimaryKey(Integer picMovId);

    int insert(VideoPicMov record);

    int insertSelective(VideoPicMov record);

    VideoPicMov selectByPrimaryKey(Integer picMovId);

    int updateByPrimaryKeySelective(VideoPicMov record);

    int updateByPrimaryKey(VideoPicMov record);
}