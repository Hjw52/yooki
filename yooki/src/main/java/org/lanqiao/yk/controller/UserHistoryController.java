package org.lanqiao.yk.controller;

import org.lanqiao.yk.entity.UserHistory;
import org.lanqiao.yk.service.UserHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserHistoryController {
    @Autowired
    UserHistoryService userHistoryService;
    @RequestMapping("/selecthistory")
    public List<UserHistory> selecthistory(UserHistory record){
        return userHistoryService.selecthistory(record);
    }
}
