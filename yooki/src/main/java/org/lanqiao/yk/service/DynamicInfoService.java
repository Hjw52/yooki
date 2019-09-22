package org.lanqiao.yk.service;

import org.lanqiao.yk.entity.DynamicComment;
import org.lanqiao.yk.entity.DynamicInfo;
import org.lanqiao.yk.entity.UserInfo;

import java.util.List;

public interface DynamicInfoService {
    public int selectDynamic(Integer id);
    public int insertDynamic(DynamicInfo record);
    public  List<DynamicInfo>getAllDynamic();
    public List<DynamicInfo> getAllDynamicByPage(int offset, int size);
    public List<DynamicComment> getComment(Integer id);
    public int insertComment(DynamicComment record);
    public int commentNum(Integer id);
    public int selectIdol(Integer id);
    public int selectFans(Integer id);
    public UserInfo selectUser(Integer id);

}
