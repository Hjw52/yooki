package org.lanqiao.yk.service;


import org.lanqiao.yk.entity.UserInfo;
import org.lanqiao.yk.mapper.UserInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    UserInfoMapper userInfoMapper;

    @Override
    public UserInfo login(String telephone, String email) {
        return userInfoMapper.login(telephone,email);
    }

    @Override
    public UserInfo login(String telephone) {
        return userInfoMapper.login(telephone);
    }

    @Override
    public int logon(UserInfo record) {
        return userInfoMapper.insertSelective(record);
    }
    @Override
    public int upPwd(Long telephone, String password) {
        return userInfoMapper.upPwd(telephone,password);
    }
}
