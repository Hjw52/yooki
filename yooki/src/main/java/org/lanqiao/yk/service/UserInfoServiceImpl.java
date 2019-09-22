package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.UserInfo;
import org.lanqiao.yk.mapper.UserInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoServiceImpl implements UserInfoService {
    @Autowired
    UserInfoMapper userInfoMapper;

    @Override
    public List <UserInfo> getuser(Integer userId) {
        return userInfoMapper.getuser(userId);
    }

    @Override
    public int deleteByPrimaryKey(Integer userId) {
        return userInfoMapper.deleteByPrimaryKey(userId);
    }

    @Override
    public int insertSelective(UserInfo userinfo) {
        return userInfoMapper.insertSelective(userinfo);
    }

    @Override
    public int updateByPrimaryKeySelective(UserInfo userInfo1) {
        return  userInfoMapper.updateByPrimaryKeySelective(userInfo1);
    }

    @Override
    public int updatepic(String facePic, Integer userId) {
        return userInfoMapper.updateByPrimaryKey(facePic,userId);
    }
}
