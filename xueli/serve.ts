import express from 'express';
import bodyParser from 'body-parser';
const app=express();
app.use(bodyParser.json());
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number,
        public message:any
    ){}
}
export class Shequ{
    constructor(
        public id:number,
        public shequName:string,
        public head:string,
        public images:string,
        public time:string,
        public person:string,
        public read:number,
        public ping:number,
        public message:any
    ){}
}
export class Video{
    constructor(
        public id:number,
        public name:string,
        public context:string,
        public text:string,
        public images:string,
    ){}
}
const courses=[
    new Course(1,'混合应用',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",10,90,null),
    new Course(2,'web开发(二)',"http://usercontent.edu2act.cn/media/team/18-09-11/Ypf253J7ydMQ2CckxWf6zJ.jpg?imageView2/1/w/230/h/130",11,98,null),
    new Course(3,'web系统测试',"http://usercontent.edu2act.cn/media/team/18-09-11/AbbCZfnQVQHxyU2GBbQ5SB.jpg?imageView2/1/w/230/h/130",12,90,null),
    new Course(4,'html5与css3',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,92,null),
    new Course(5,'web开发',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,72,null),
    new Course(6,'软件测试基础',"http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",30,82,null),
    new Course(7,'信息素养',"http://usercontent.edu2act.cn/media/team/18-09-06/UTjLGPA9oHaKeHMLi9Ko4c.jpg?imageView2/1/w/230/h/130",10,92,null),
    new Course(8,'计算机导论',"http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",30,92,null),
    new Course(9,'数据结构',"http://usercontent.edu2act.cn/media/team/18-09-06/bE6jL98kCfWg3Hij6gyokN.jpg?imageView2/1/w/230/h/130",20,92,null),
    new Course(10,'软件过程',"http://usercontent.edu2act.cn/media/team/18-05-31/GvVrSCw2H2XBgXjLdgTvmc.jpeg?imageView2/1/w/230/h/130",18,92,null),
    new Course(11,'JS进阶',"http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",17,92,null),
    new Course(12,'操作系统',"http://usercontent.edu2act.cn/media/team/18-02-26/T6JLRm2Y9noLzWNjwAhF8X.png?imageView2/1/w/230/h/130",15,102,null),
];
const courses1=[
    new Course(1,'混合应用',"http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",14,90,null),
    new Course(11,'JS进阶',"http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",17,92,"《JS进阶》是计算机软件以及相关专业在H5前端开发基础方向课，它是为培养应用型人才掌握使用计算机的技能而开设的"),
    new Course(8,'计算机导论',"http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",30,92,"河北师范大学软件学院2016级《计算机导论》同步课"),
    new Course(4,'html5与css3',"http://usercontent.edu2act.cn/media/team/18-09-11/B32yP44hiothFxyegigXe7.jpg?imageView2/1/w/230/h/130",10,92,"本课程主要学习HTML5的新特性，CSS3的新特性以及前端开发框架Bootstrap"),
]
const video=[
    new Course(1,'Github开源之旅',"http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",14,3734,"完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull"),
    new Course(2,'ICONIX软件过程',"http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",12,2315,"ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。"),
    new Course(3,'web自动化测试',"http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",12,1310,"上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了.下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。"),
    new Course(4,'html5基础',"http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",13,3794,"HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。"),
]
const videodetail=[
    new Video(1,"基础知识&实用工具","Github 开源之旅视频课程第一季：启程","课程说明（上）","http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4"),
    new Video(2,"基础知识&实用工具","扩展的ICONIX软件过程实践","愿景","http://usercontent.edu2act.cn/media/cs/16-11-03/sWbgp5GAJPzWn2fiWzGCm4.mp4"),
    new Video(3,"软件测试","Selenium IDE WEB自动化测试入门视频课程（中）","承前启后","http://usercontent.edu2act.cn/media/cs/16-11-08/RD6KKJxUrAMJNkaQX9wBnN.mp4"),
    new Video(4,"WEB前端开发","HTML5基础","地理位置定位","http://usercontent.edu2act.cn/media/cs/16-11-11/PzEnutTEAsGFPgyiudCrW8.mp4"),
]
const studying=[
    new Course(1,'构建交互丰富的web应用：Javascript',"http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg",14,3734,"Javascript 是世界上最流行的编程语言。应用Javascript可以构建交互效果丰富的Web应用。Javascript成为了每一个开发人员都知道的语言。"),
    new Course(2,'ICONIX软件过程',"http://usercontent.edu2act.cn/media/cs/16-11-03/TeZqcmxukYntmh8UigEeqU.png?imageView2/1/w/320/h/190",12,2315,"ICONIX软件过程的主体设计思想是尽早进入编码阶段，缩短分析设计周期的软件开发方法合理的简化统一过程(RUP)， 基于极限编程(XP)和敏捷软件开发的思想。 ICONIX过程与 UML和RUP相比，是轻量级的过程。本实践课程是基于12306火车票购票系统的例子全面讲解ICONIX各阶段生成的UML模型以及EA工具的使用。")
]
const shequs=[
    new Shequ(1,"类定义关键字详解","http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg","2018-10-09 19:21","3-张馨元",39,0,"JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就"),
    new Shequ(2,"一个java文件中可包含多个main方法","http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256","http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/edrLxidT6BMiGxXjRq39iJ.jpg","2018-10-09 19:07","3-张馨元",31,2,"一个java文件中可包含多个main方法java中的main方法是java应用程序的入口，java程序在运行时，首先调用执行main方法。但并不是说java中只能有一个main方法，不同类中都可以包含main方法。但是当JVM进行编译时，只"),
]
export class Finshed{
    constructor(
        public name:string,
        public jiezhi:string,
        public yanshou:string,
        public grade:number,
        public score:number,
        public coursename:string
    ){}
}
const finsheds=[
    new Finshed("任务二--js基础练习与应用","已截止","待验收",9,10,"2016级混合应用开发"),
    new Finshed("任务四 文件拖放","已截止","待验收",8,10,"2016级HTML5与CSS3前端开发"),
    new Finshed("任务一--组件交互与服务","已截止","待验收",4,5,"2016级混合应用开发"),
    new Finshed("任务三 WEB存储","已截止","待验收",3,5,"2016级HTML5与CSS3前端开发"),
]
 app.get('/api',(req,res)=>{
    res.json(courses);
 });
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses.find((ele)=>ele.id==req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
 });
 app.get('/api/courses1',(req,res)=>{
    res.json(courses1);
});
app.get('/api/video',(req,res)=>{
    res.json(video);
});
app.get('/api/video/:id',(req,res)=>{
    req.params;
    res.json(video.find((ele)=>ele.id==req.params.id));
});
app.get('/api/studying',(req,res)=>{
    res.json(studying);
});
app.get('/api/shequs',(req,res)=>{
    res.json(shequs);
});
app.get('/api/shequs/:id',(req,res)=>{
    req.params;
    res.json(shequs.find((ele)=>ele.id==req.params.id));
});
app.get('/api/videodetail/:id',(req,res)=>{
    req.params;
    res.json(videodetail.find((ele)=>ele.id==req.params.id));
});
app.get('/api/finsheds',(req,res)=>{
    res.json(finsheds);
});
app.listen(8000);