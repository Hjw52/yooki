package org.lanqiao.yk.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.lanqiao.yk.entity.VideoInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface VideoInfoMapper {
    int addBrowse (Integer videoId);

    VideoInfo getVideo(Integer videoId);

    int deleteByPrimaryKey(Integer videoId);

    int insert(VideoInfo record);

    int insertSelective(VideoInfo record);

    VideoInfo selectByPrimaryKey(Integer videoId);

    int updateByPrimaryKeySelective(VideoInfo record);

    int updateByPrimaryKey(VideoInfo record);

    int searchvideo(Integer userId);

    List<VideoInfo> showAllvideo(Integer userId);

    List<VideoInfo> showAllcollect(Integer userId);
}