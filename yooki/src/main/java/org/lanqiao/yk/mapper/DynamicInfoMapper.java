package org.lanqiao.yk.mapper;

import org.lanqiao.yk.entity.DynamicInfo;

import java.util.List;

public interface DynamicInfoMapper {
    int deleteByPrimaryKey(Integer dynamicId);

    int insert(DynamicInfo record);

    int insertSelective(DynamicInfo record);

    DynamicInfo selectByPrimaryKey(Integer dynamicId);

    int updateByPrimaryKeySelective(DynamicInfo record);

    int updateByPrimaryKey(DynamicInfo record);

    int selectDynamic(Integer id);

    int myinsert(DynamicInfo record);

    List<DynamicInfo> getAllDynamicByPage(int offset, int size);

    List<DynamicInfo>getAllDynamic();

    int searchdynamic(Integer userId);
}