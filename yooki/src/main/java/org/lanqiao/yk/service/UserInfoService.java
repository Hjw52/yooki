package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.UserInfo;

import java.util.List;

public interface UserInfoService {
    public List<UserInfo>getuser(Integer userId);
    public int deleteByPrimaryKey(Integer userId);

    public int insertSelective(UserInfo userInfo);
    public int updateByPrimaryKeySelective(UserInfo userInfo);
    public int updatepic(String facePic, Integer userId);


}
