import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import{CommonService} from './services/common.service';
import{Common2Service} from './services/common2.service';
import { InputComponent } from './toDoLists/input/input.component';
import { ListComponent } from './toDoLists/list/list.component';
import { FatherComponent } from './toDoLists/father/father.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TongbukedetailComponent } from './components/tongbukedetail/tongbukedetail.component';
import { TaskComponent } from './components/task/task.component';
import { TongbukeComponent } from './components/tongbuke/tongbuke.component';
import { KechengComponent } from './components/kecheng/kecheng.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { InformComponent } from './components/inform/inform.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
import { UncommittedComponent } from './components/uncommitted/uncommitted.component';
import { FinshedComponent } from './components/finshed/finshed.component';
import { OverComponent } from './components/over/over.component';
import { GuanzhuComponent } from './components/guanzhu/guanzhu.component';
import { XuexiComponent } from './components/xuexi/xuexi.component';
import { KanguoComponent } from './components/kanguo/kanguo.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    InputComponent,
    ListComponent,
    FatherComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbukedetailComponent,
    TaskComponent,
    TongbukeComponent,
    KechengComponent,
    QieshuoComponent,
    InformComponent,
    CoursedetailComponent,
    ShequdetailComponent,
    UncommittedComponent,
    FinshedComponent,
    OverComponent,
    GuanzhuComponent,
    XuexiComponent,
    KanguoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      /* {path:'home',component:ParentComponent},
      {path:'tongbu',component: FatherComponent}, *///path是一个路径，后面的是显示的组件
      //{path:'home',component:HomeComponent,children:[{path:"",component:}]},
      {path:'home',component:HomeComponent,children:
      [{path:"task",component:TaskComponent,children:[
        {path:"uncommitted",component:UncommittedComponent},
        {path:"finshed",component:FinshedComponent},
        {path:"over",component:OverComponent},
        {path:'',redirectTo:'uncommitted',pathMatch:'full'},
      ]},
      {path:"tongbuke",component:TongbukeComponent},
      {path:"kecheng",component:KechengComponent,children:[
        {path:"guanzhu",component:GuanzhuComponent},
        {path:"xuexi",component:XuexiComponent},
        {path:"kanguo",component:KanguoComponent},
        {path:'',redirectTo:'xuexi',pathMatch:'full'},
      ]},
      {path:"qieshuo",component:QieshuoComponent},
      {path:"inform",component:InformComponent},
      {path:'',redirectTo:'task',pathMatch:'full'},
    ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbukedetailComponent},
      {path:'course/:videoId',component:CoursedetailComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'shequ/:shequId',component:ShequdetailComponent},
      //{path:"task",component:TaskComponent} ,
      {path:'',redirectTo:'home',pathMatch:'full'},//第一次加载，默认显示的组件
      {path:'**',component:HomeComponent},//通配路由必须写在最后一个，因为路由匹配是从上向下依次匹配,如果写在上面，通配符就会匹配到任意的路径 
          
    ]) ,
    AppRoutingModule,
    HttpClientModule
  ],
  providers:[//CommonService,
  //{provide:CommonService,useClass:CommonService},相同的名字
  {provide:CommonService,useClass:Common2Service}],//不同的名字，后面才是真正实例化的类，前面只是找到对应的要实例化的类的名字
  bootstrap: [AppComponent]
})
export class AppModule {}
