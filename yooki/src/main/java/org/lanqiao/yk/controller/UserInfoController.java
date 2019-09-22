package org.lanqiao.yk.controller;
import org.lanqiao.yk.entity.UserInfo;
import org.lanqiao.yk.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
public class UserInfoController {
  @Autowired
    UserInfoService userinfoservice;
    @RequestMapping("/getuser")
    public List <UserInfo> getuser(Integer userId){
        return userinfoservice.getuser(userId);
    }
 @RequestMapping("/insertSelective")
    public int insertSelective(UserInfo userInfo){return userinfoservice.insertSelective(userInfo);}
    @RequestMapping("/updateByPrimaryKeySelective")
    public int updateByPrimaryKeySelective (UserInfo userInfo){return userinfoservice.updateByPrimaryKeySelective(userInfo);}
    @RequestMapping("/deleteByPrimaryKey")
    public int deleteByPrimaryKey(Integer userId){return userinfoservice.deleteByPrimaryKey(userId);}
    @RequestMapping("/updatepic")
    public int insertDynamic(MultipartFile files,Integer userId){
        //获取上传图片的名称
        String photoName=files.getOriginalFilename();
        //对上传后的文件进行名称处理
        String[]names=photoName.split("\\.");
        String name= UUID.randomUUID().toString().replaceAll("-","");
        //设置图片上传的路径
        try {
            files.transferTo(new File("/home/image/"+name+names[1]));
        } catch (IOException e) {
            e.printStackTrace();
        }
        String facePic="/image/"+name+names[1];
//        record.setFacePic("/image/"+name+names[1]);
        return userinfoservice.updatepic(facePic,userId);
    }

}
