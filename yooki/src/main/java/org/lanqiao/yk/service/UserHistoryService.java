package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.UserHistory;

import java.util.List;

public interface UserHistoryService {
    public List<UserHistory> selecthistory(UserHistory record);

}
