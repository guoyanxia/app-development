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

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    InputComponent,
    ListComponent,
    FatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers:[//CommonService,
  //{provide:CommonService,useClass:CommonService},相同的名字
  {provide:CommonService,useClass:Common2Service}],//不同的名字，后面才是真正实例化的类，前面只是找到对应的要实例化的类的名字
  bootstrap: [AppComponent]
})
export class AppModule {}
