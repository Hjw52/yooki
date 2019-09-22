package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.UserHistory;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserHistoryMapper {
    int deleteByPrimaryKey(Integer historyId);

    int insert(UserHistory record);

    int insertSelective(UserHistory record);

    List<UserHistory> selecthistory(UserHistory record);

    int updateByPrimaryKeySelective(UserHistory record);

    int updateByPrimaryKey(UserHistory record);
}