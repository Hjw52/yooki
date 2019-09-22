package org.lanqiao.yk.controller;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.http.MethodType;
import com.aliyuncs.profile.DefaultProfile;
import org.lanqiao.yk.entity.UserInfo;
import org.lanqiao.yk.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    LoginService loginService;

    @RequestMapping("/login1")
    public UserInfo login(String telephone, String email) {
        return loginService.login(telephone, email);
    }
    @RequestMapping("/login2")
    public UserInfo login(String telephone){

        return loginService.login(telephone);
    }
    @RequestMapping("/logon")
    public int logon(UserInfo record){
        return loginService.logon(record);
    }
    @RequestMapping("/upPwd")
    public int upPwd(Long telephone, String password){
        return loginService.upPwd(telephone,password);
    }
    @RequestMapping("/sms")
    private void SMS(String telephone,String smsId,Integer code){
        DefaultProfile profile = DefaultProfile.getProfile("cn-hangzhou", "LTAI4FeY29zurhd1goZbdyAL", "sEu88b4t5n6uPUYquvVRVwFyj9M15e");
        IAcsClient client = new DefaultAcsClient(profile);

        CommonRequest request = new CommonRequest();
        request.setMethod(MethodType.POST);
        request.setDomain("dysmsapi.aliyuncs.com");
        request.setVersion("2017-05-25");
        request.setAction("SendSms");
        request.putQueryParameter("RegionId", "cn-hangzhou");
        request.putQueryParameter("SignName", "yk视频网");
        request.putQueryParameter("PhoneNumbers", ""+telephone+"");
        request.putQueryParameter("TemplateCode", ""+smsId+"");
        request.putQueryParameter("TemplateParam", "{\"code\":\""+code+"\"}");
        try {
            CommonResponse response = client.getCommonResponse(request);
            System.out.println(response.getData());
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
        }
    }
}
