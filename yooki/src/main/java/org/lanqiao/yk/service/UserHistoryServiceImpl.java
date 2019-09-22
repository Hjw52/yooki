package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.UserHistory;
import org.lanqiao.yk.mapper.UserHistoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserHistoryServiceImpl implements UserHistoryService {
    @Autowired
    UserHistoryMapper userHistoryMapper;
    @Override
    public List<UserHistory> selecthistory(UserHistory record) {
        return userHistoryMapper.selecthistory(record);
    }
}
