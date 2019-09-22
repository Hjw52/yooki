package org.lanqiao.yk.controller;

import org.lanqiao.yk.entity.DynamicComment;
import org.lanqiao.yk.entity.DynamicInfo;
import org.lanqiao.yk.entity.UserInfo;
import org.lanqiao.yk.service.DynamicInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
public class DynamicInfoController {
    @Autowired
    DynamicInfoService dynamicInfoService;
    @RequestMapping("/selectDynamic")
    public int selectDynamic(Integer id){ return dynamicInfoService.selectDynamic(id);}
    @RequestMapping("/getAllByPage")
    public List<DynamicInfo> getAllDynamic(int offset,int size){ return dynamicInfoService.getAllDynamicByPage(offset,size);}
    @RequestMapping("/getAll")
    public  List<DynamicInfo>getAllDynamic(){return dynamicInfoService.getAllDynamic();}
    @RequestMapping("/insert")
    public int insertDynamic(MultipartFile files,DynamicInfo record){
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
                record.setDynamicImage("/image/"+name+names[1]);
                return dynamicInfoService.insertDynamic(record);
    }
    @RequestMapping("/getComment")
    public List<DynamicComment> getComment(Integer id){ return dynamicInfoService.getComment(id);}
    @RequestMapping("/insertComment")
    public  int insertComment(DynamicComment record){ return dynamicInfoService.insertComment(record);}
    @RequestMapping("/getCommentNum")
    public int commentNum(Integer id){ return dynamicInfoService.commentNum(id);}
    @RequestMapping("/selectIdol")
    public int selectIdol(Integer id){
        return dynamicInfoService.selectIdol(id);
    }
    @RequestMapping("/selectFans")
    public int selectFans(Integer id){ return dynamicInfoService.selectFans(id); }
    @RequestMapping("/selectUser")
    public UserInfo selectUser(Integer id){ return dynamicInfoService.selectUser(id);}
}
