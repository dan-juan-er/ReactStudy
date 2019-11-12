//搭建服务器
let express = require("express");
let bp = require("body-parser");
let app = express();
//第一种方式：post请求 body接收数据
// app.use(bp.json());
//第二种方式：post请求数据以键值对形式接收
app.use(bp.urlencoded({extended:false}));
//get请求
app.get("/api/get",function (req,res) {
    if (req.query.user == "wen" && req.query.pass == "123"){
        res.json({msg:"登录成功"});
    } else {
        res.json({msg:"登录失败"});
    }
});
//post
app.post("/api/post",function (req,res) {
    console.log(req.body);
    if (req.body.user == "song" && req.body.pass == "123"){
        res.json({msg:"注册成功"});
    } else {
        res.json({msg:"注册失败"});
    }
});
app.listen(8989,function () {
    console.log("8989服务器启动成功")
});