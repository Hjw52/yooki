package org.lanqiao.yk.service;


import org.lanqiao.yk.entity.VideoInfo;
import org.lanqiao.yk.mapper.VideoInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.data.solr.core.query.Criteria;
import org.springframework.data.solr.core.query.Query;
import org.springframework.data.solr.core.query.SimpleQuery;
import org.springframework.data.solr.core.query.result.ScoredPage;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchServiceImpl implements SearchService {
    @Autowired
    private SolrTemplate solrTemplate;

    @Autowired
    private VideoInfoMapper videoInfoMapper;


//    相关
    @Override
    public List<VideoInfo> searchVideoInfo(String keyword) {
        //查询所有
        Query query = new SimpleQuery();

        //设置条件
        Criteria criteria = new Criteria("videoName").is(keyword);
        query.addCriteria(criteria);

        //设置分页
        query.setOffset(0l);//开始索引，默认0
        query.setRows(10);//每页记录数

        //设置排序规则
        Sort sort = new Sort(Sort.Direction.ASC,"videoCreateTime");
        query.addSort(sort);

        //查询
        ScoredPage<VideoInfo> pages = solrTemplate.queryForPage("articles",query, VideoInfo.class);
        System.out.println("pages.getTotalElements() = "+ pages.getTotalElements());
        List<VideoInfo> content = pages.getContent();
        return content;
    }
//    最新
    @Override
    public List<VideoInfo> searchVideo(String keyword) {
        //查询所有
        Query query = new SimpleQuery();

        //设置条件
        Criteria criteria = new Criteria("videoName").is(keyword);
        query.addCriteria(criteria);

        //设置分页
        query.setOffset(0l);//开始索引，默认0
        query.setRows(10);//每页记录数

        //设置排序规则
        Sort sort = new Sort(Sort.Direction.DESC,"videoCreateTime");
        query.addSort(sort);

        //查询
        ScoredPage<VideoInfo> pages = solrTemplate.queryForPage("articles",query, VideoInfo.class);
        System.out.println("pages.getTotalElements() = "+ pages.getTotalElements());
        List<VideoInfo> content = pages.getContent();
        return content;
    }

    @Override
    public List<VideoInfo> searchCategory(String category) {
        //查询所有
        Query query = new SimpleQuery();

        //设置条件
        Criteria criteria = new Criteria("category").is(category);
        query.addCriteria(criteria);

        //设置分页
        query.setOffset(0l);//开始索引，默认0
        query.setRows(10);//每页记录数

        //设置排序规则
        Sort sort = new Sort(Sort.Direction.DESC,"videoCreateTime");
        query.addSort(sort);

        //查询
        ScoredPage<VideoInfo> pages = solrTemplate.queryForPage("articles",query, VideoInfo.class);
        System.out.println("pages.getTotalElements() = "+ pages.getTotalElements());
        List<VideoInfo> content = pages.getContent();
        return content;
    }
    @Override
    public List<VideoInfo> searchVideoHot(String keyword) {
        //查询所有
        Query query = new SimpleQuery();

        //设置条件
        Criteria criteria = new Criteria("videoName").is(keyword);
        query.addCriteria(criteria);

        //设置分页
        query.setOffset(0l);//开始索引，默认0
        query.setRows(10);//每页记录数

        //设置排序规则
        Sort sort = new Sort(Sort.Direction.DESC,"videoBrowse");
        query.addSort(sort);

        //查询
        ScoredPage<VideoInfo> pages = solrTemplate.queryForPage("articles",query, VideoInfo.class);
        System.out.println("pages.getTotalElements() = "+ pages.getTotalElements());
        List<VideoInfo> content = pages.getContent();
        return content;
    }
    //    最热
    @Override
    public List<VideoInfo> searchCategoryHot(String category) {
        //查询所有
        Query query = new SimpleQuery();

        //设置条件
        Criteria criteria = new Criteria("category").is(category);
        query.addCriteria(criteria);

        //设置分页
        query.setOffset(0l);//开始索引，默认0
        query.setRows(10);//每页记录数

        //设置排序规则
        Sort sort = new Sort(Sort.Direction.DESC,"videoBrowse");
        query.addSort(sort);

        //查询
        ScoredPage<VideoInfo> pages = solrTemplate.queryForPage("articles",query, VideoInfo.class);
        System.out.println("pages.getTotalElements() = "+ pages.getTotalElements());
        List<VideoInfo> content = pages.getContent();
        return content;
    }
    @Override
    public List<VideoInfo> searchCategoryDESC(String category) {
        //查询所有
        Query query = new SimpleQuery();

        //设置条件
        Criteria criteria = new Criteria("category").is(category);
        query.addCriteria(criteria);

        //设置分页
        query.setOffset(0l);//开始索引，默认0
        query.setRows(10);//每页记录数

        //设置排序规则
        Sort sort = new Sort(Sort.Direction.DESC,"videoCreateTime");
        query.addSort(sort);

        //查询
        ScoredPage<VideoInfo> pages = solrTemplate.queryForPage("articles",query, VideoInfo.class);
        System.out.println("pages.getTotalElements() = "+ pages.getTotalElements());
        List<VideoInfo> content = pages.getContent();
        return content;
    }
}
