import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BPage } from '../b/b';
// import { JiajuPage } from '../jiaju/jiaju';
// import { APage } from '../a/a';
// import { ModalController} from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
arr=["推荐","家居","餐厨","床上用品"];
  constructor(public navCtrl: NavController) {
    
  }
  
  // items:["yellow","red","green"];
 /*  goSub(){
    this.navCtrl.push(BPage);//首页的子页面为BPage;堆栈的形式，push将新视图推入导航堆栈 pop从导航堆栈中删除视图
    //this.navCtrl.push(BPage,{id:1});//传参,传递给下一个视图的数据
  } */
  // goSub(){
  //   this.navCtrl.push(JiajuPage);
  // }
  ionViewDidLoad() {
    // console.log('ionViewDidLoad APage');
   
  }

}
