package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.VideoBarrage;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface VideoBarrageMapper {

    //获取弹幕
    List<VideoBarrage> getAllBarrage(String videoId);

    //插入弹幕
    int insertSelective(VideoBarrage record);

    int deleteByPrimaryKey(Integer barrageId);

    int insert(VideoBarrage record);

    VideoBarrage selectByPrimaryKey(Integer barrageId);

    int updateByPrimaryKeySelective(VideoBarrage record);

    int updateByPrimaryKey(VideoBarrage record);
}