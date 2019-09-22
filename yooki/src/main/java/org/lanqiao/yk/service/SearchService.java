package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.VideoInfo;

import java.util.List;

public interface SearchService {
//    相关
    public List<VideoInfo> searchVideoInfo(String keyword);
//    最新
    public List<VideoInfo> searchVideo(String keyword);
//    查询分类
public List<VideoInfo> searchCategory(String category);

    public List<VideoInfo> searchCategoryDESC(String category);

    public List<VideoInfo> searchVideoHot(String keyword);

    public List<VideoInfo> searchCategoryHot(String category);
}
