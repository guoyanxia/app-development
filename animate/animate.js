/* function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
} */

/* function animate(obj,json,callback){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var isStop=true;
        for(var attr in json){
            var now=0;
            if(attr=='opacity'){
                 now=parseInt(getStyle(obj,attr)*100);
            }else{
                 now=parseInt(getStyle(obj,attr));
            }
            var speed=(json[attr]-now)/6;
            spped=speed>0?Math.ceil(speed):Math.floor(speed);
            var current=now+speed;
            if(attr=='opacity'){
                obj.style[attr]=current/100;
            }else{
                obj.style[attr]=current+'px';
            }
            if(json[attr] != current){
                isStop=false;
            }

        }
        if(isStop){
            clearInterval(obj.timer);
        }
    },30)
}
 */
function animate(obj1,obj2,obj3,obj4,obj5,num){
    function imgTab(){
        obj2[i%9].style.display='none';
        i++;
        obj2[i%9].style.display="block";
        for(var k=0;k<9;k++){
                obj3[k].style.background="#fff"            
            }
            obj3[i%9].style.background="red";
    }
    var timer=setInterval(imgTab,3000);
    obj1.onmouseover=function(){
        clearInterval(timer);
    }
    obj1.onmouseout=function(){
         timer=setInterval(imgTab,3000);
    }
    obj4.onclick=function(){
        obj2[i%9].style.display='none';
        i--;
        if(i<0){
            i=8;
            obj2[i%9].style.display="block";
        }else{
            obj2[i%9].style.display="block";
        }      
        for(var k=0;k<9;k++){
            obj3[k].style.background="#fff"            
            }
            obj3[i%9].style.background="red"; 
    }
    obj5.onclick=function(){
        imgTab();
    }
    for(var j=0;j<9;j++){
        obj3[j].index=j; 
        obj3[j].onclick=function(){    
            for(var k=0;k<9;k++){
                obj2[k].style.display='none';
                obj3[k].style.background="#fff"            
            }
            obj2[this.index].style.display="block";
            i=this.index;
            this.style.background="red";
        }
        
    }
}
