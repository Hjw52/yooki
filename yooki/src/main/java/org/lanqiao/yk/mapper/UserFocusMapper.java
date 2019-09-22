package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.UserCollect;
import org.lanqiao.yk.entity.UserFocus;
import org.springframework.stereotype.Repository;

@Repository
public interface UserFocusMapper {
    int deleteFocus(UserFocus userFocus);

    int checkFocus(UserFocus userFocus);

    int deleteByPrimaryKey(Integer focusId);

    int insert(UserFocus record);

    int insertSelective(UserFocus record);

    UserFocus selectByPrimaryKey(Integer focusId);

    int updateByPrimaryKeySelective(UserFocus record);

    int updateByPrimaryKey(UserFocus record);

    int selectIdol(Integer id);

    int selectFans(Integer id);

    int searchfans(Integer userId);
    int searchidol(Integer userId);
}