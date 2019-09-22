package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.UserCollect;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCollectMapper {
    int searchcollect(Integer userId);

    int deleteCollect(UserCollect userCollect);

    int checkCollect(UserCollect userCollect);

    int deleteByPrimaryKey(Integer collectId);

    int insert(UserCollect record);

    int insertSelective(UserCollect record);

    UserCollect selectByPrimaryKey(Integer collectId);

    int updateByPrimaryKeySelective(UserCollect record);

    int updateByPrimaryKey(UserCollect record);
}