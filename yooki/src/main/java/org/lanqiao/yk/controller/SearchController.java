package org.lanqiao.yk.controller;

import org.lanqiao.yk.entity.VideoInfo;
import org.lanqiao.yk.service.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchController {
    @Autowired
    SearchService searchService;

    @RequestMapping("/searcher")
    public List<VideoInfo> search(String keyword){
        return  searchService.searchVideoInfo(keyword);
    }

    @RequestMapping("/searchDESC")
    public List<VideoInfo> searchDESC(String keyword){
        return  searchService.searchVideo(keyword);
    }
//  类型排序
    @RequestMapping("/searchCategory")
    public List<VideoInfo> searchCategory(String category){
        return  searchService.searchCategory(category);
    }

    @RequestMapping("/searchCategoryDESC")
    public List<VideoInfo> searchCategoryDESC(String category){
        return  searchService.searchCategoryDESC(category);
    }

//    最热
    @RequestMapping("/searchHot")
    public List<VideoInfo> searchVideoHot(String keyword){
        return  searchService.searchVideoHot(keyword);
    }

    @RequestMapping("/searchCategoryHot")
    public List<VideoInfo> searchCategoryHot(String category){
        return  searchService.searchCategoryHot(category);
    }
}
