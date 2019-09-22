package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.UserInfo;

public interface LoginService {
    UserInfo login(String telephone, String email);
    UserInfo login(String telephone);
    int logon(UserInfo record);
    int upPwd(Long telephone,String password);
}
