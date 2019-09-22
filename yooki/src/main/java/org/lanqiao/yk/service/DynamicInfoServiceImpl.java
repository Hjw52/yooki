package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.DynamicComment;
import org.lanqiao.yk.entity.DynamicInfo;
import org.lanqiao.yk.entity.UserInfo;
import org.lanqiao.yk.mapper.DynamicCommentMapper;
import org.lanqiao.yk.mapper.DynamicInfoMapper;
import org.lanqiao.yk.mapper.UserFocusMapper;
import org.lanqiao.yk.mapper.UserInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DynamicInfoServiceImpl implements DynamicInfoService {
    @Autowired
    DynamicInfoMapper dynamicInfoMapper;
    @Autowired
    DynamicCommentMapper dynamicCommentMapper;
    @Autowired
    UserFocusMapper userFocusMapper;
    @Autowired
    UserInfoMapper userInfoMapper;
    @Override
    public int selectDynamic(Integer id) {
        return dynamicInfoMapper.selectDynamic(id);
    }
    @Override
    public int insertDynamic(DynamicInfo record) {
        return dynamicInfoMapper.myinsert(record);
    }
    @Override
    public List<DynamicInfo> getAllDynamic() {
        return dynamicInfoMapper.getAllDynamic();
    }
    @Override
    public List<DynamicInfo>getAllDynamicByPage(int offset,int size) { return dynamicInfoMapper.getAllDynamicByPage(offset,size); }
    @Override
    public List<DynamicComment> getComment(Integer id) {
        return dynamicCommentMapper.getComment(id);
    }
    @Override
    public int insertComment(DynamicComment record) { return dynamicCommentMapper.insertComment(record); }
    @Override
    public int commentNum(Integer id) { return dynamicCommentMapper.commentNum(id); }
    @Override
    public int selectIdol(Integer id){
        return userFocusMapper.selectIdol(id);
    }
    @Override
    public int selectFans(Integer id){ return userFocusMapper.selectFans(id); }
    @Override
    public UserInfo selectUser(Integer id) {
        return userInfoMapper.selectUser(id);
    }
}
