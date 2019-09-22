package org.lanqiao.yk.mapper;

import org.apache.ibatis.annotations.Param;
import org.lanqiao.yk.entity.UserInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserInfoMapper {
    int deleteByPrimaryKey(Integer userId);

    int insert(UserInfo record);

    int insertSelective(UserInfo record);

    UserInfo selectByPrimaryKey(Integer userId);

    int updateByPrimaryKeySelective(UserInfo record);

    UserInfo login(String telephone,String email);
    UserInfo login(String telephone);
    int upPwd(Long telephone,String password);
    UserInfo selectUser(Integer id);
    String searchusername(Integer userId);
    String searchuserintro(Integer userId);
    String searchfacepic(Integer userId);
    String searchuserurl(Integer userId);
    int updateByPrimaryKey(@Param("facePic")String facePic, @Param("userId")Integer userId);
    List<UserInfo> getuser(Integer userId);
}