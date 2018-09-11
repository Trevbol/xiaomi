window.onload=function () {
    let Eject=document.getElementsByClassName("box_Eject")[0];
    // console.log(Eject);
    let class5=document.getElementsByClassName("class5")[0];
    // console.log(class5);
    class5.onmouseenter=function () {
        Eject.style.height = "98px";
        Eject.style.bottom="-98px";
        Eject.style.boxShadow="0 2px 2px 2px rgba(0,0,0,0.09)";
    };
    class5.onmouseleave=function () {
        Eject.style.height="0px";
        Eject.style.bottom="0px";
    };

    let aside=document.getElementsByClassName("aside");
    let lis=aside[0].getElementsByTagName("li");
    let Eject1=document.getElementsByClassName("box_Eject_1");
    for (let i=0;i<lis.length;i++) {
        lis[i].onmouseenter=function(){
            Eject1[i].style.display="block";
        }
        lis[i].onmouseleave=function(){
            Eject1[i].style.display="none";
        }
    }


    let blick=document.getElementsByClassName("blick-box")[0];
    // console.log(blick);
    let blickBoxR=blick.getElementsByClassName("blick-box-top-right")[0];
    // console.log(blickBoxR);
    let li1=blickBoxR.getElementsByTagName("li");
    // console.log(li1);

    let right=document.getElementsByClassName("blick-box-bottom_right");
    // console.log(right);

    for (let k=0;k<li1.length;k++){
        li1[k].onmouseenter=function () {
            for(let l=0;l<li1.length;l++){
                right[l].style.zIndex="5";
            }
            right[k].style.zIndex="10";
        }
    }



    let bannerImg=document.getElementsByClassName("banner_img")[0];
    let li2=bannerImg.getElementsByTagName("li");
    let uiPager=document.getElementsByClassName("ui-pager")[0];
    let quanA=uiPager.getElementsByTagName("div");
    // console.log(quanA);

    let num=0;
    let FX=setInterval(imgX,1500);
    function imgX() {
        num++;
        if (num==li2.length){
            num=0;
        }
        for (let j=0;j<li2.length;j++){
            quanA[j].className="";
            li2[j].style.zIndex="500";
        }
        quanA[num].className="hot";
        li2[num].style.zIndex="501";
    }
    function imgY() {
        num--;
        if (num<0){
            num=li2.length-1;
        }
        for (let j=0;j<li2.length;j++){
            quanA[j].className="";
            li2[j].style.zIndex="500";
        }
        quanA[num].className="hot";
        li2[num].style.zIndex="501";
    }

    bannerImg.onmouseenter=function () {
        clearInterval(FX);
    };
    bannerImg.onmouseleave=function () {
        FX=setInterval(imgX,1500);
    };

    let Prev=document.getElementsByClassName("ui-prev")[0];
    let Next=document.getElementsByClassName("ui-next")[0];
    // console.log(Prev,Next);
    
    Prev.onclick=function () {
        imgY();
    }
    Next.onclick=function () {
        imgX();
    }
     for (let i=0;i<li2.length;i++) {
         quanA[i].onclick = function () {
             for (let j = 0; j < li2.length; j++) {
                 quanA[j].className = "";
                 li2[j].style.zIndex = "500";
             }
             quanA[i].className ="hot";
             li2[i].style.zIndex = "501";
             num = i;
         }
     }
    /*let SmallBox=document.querySelector(".contentSmallBox");
    let ButtonLeft=document.querySelector(".ButtonLeft");
    let ButtonRight=document.querySelector(".ButtonRight");
    let imgBox=document.querySelectorAll(".imgBox");
    let Jump=document.querySelectorAll(".JumpBox div");
    let flex=true;
    console.log(Jump);

    let now=next=0;


    function move() {
        next++;
        if (next==imgBox.length){
            next=0;
        }
        imgBox[next].style.left="296px";
        animate(imgBox[now],{left:-296});
        animate(imgBox[next],{left:0},function () {
            flex=true;
        });
        Jump[now].className="";
        Jump[next].className="hot";
        now=next;

    }
    function moveL() {
        next--;
        if (next<0){
            next=imgBox.length-1;
        }
        imgBox[next].style.left="-296px";
        animate(imgBox[now],{left:296});
        animate(imgBox[next],{left:0},function () {
            flex=true;
        });
        Jump[now].className="";
        Jump[next].className="hot";
        now=next;

    }
    // let t=setInterval(move,2000);
    // SmallBox.onmouseenter=function () {
    //     clearInterval(t);
    // };
    // SmallBox.onmouseleave=function () {
    //     t=setInterval(move,2000);
    // };
    ButtonRight.onclick=function () {
        if(flex==false){
            return;
        }
        if (next==imgBox.length-1) {
            return;
        }
        flex=false;
        move();

    }
    ButtonLeft.onclick=function () {
        if(flex==false){
            return;
        }
        if(next==0){
            return;
        }
        flex=false;
        moveL();

    }

    for(let i=0;i<imgBox.length;i++){
        Jump[i].onclick=function () {
            if (now==i){
                return;
            }else if(now<i){
                imgBox[i].style.left="296px";
                animate(imgBox[now],{left:-296});
                animate(imgBox[i],{left:0});
                Jump[now].className="";
                Jump[i].className="hot";
            }else {
                imgBox[i].style.left="-296px";
                animate(imgBox[now],{left:296});
                animate(imgBox[i],{left:0});
                Jump[now].className="";
                Jump[i].className="hot";
            }
            next=now=i;
        }
    }*/
    let Box1=document.querySelectorAll(".overlap_Center_Box1");
    let ButtonLeft=document.querySelector(".Button_Left");
    let ButtonRight=document.querySelector(".Button_Right");
    let SmallBox=document.querySelectorAll(".overlap_Bottom_SmallBox");
    let now=next=0;
    // console.log(Box1);
    function moveL() {
        next++;
        if (next==Box1.length){
            next=0;
        }
            Box1[next].style.left="296px";
            animate(Box1[next],{left:0});
            animate(Box1[now],{left:-296});
            SmallBox[next].classList.add("hot");
            SmallBox[now].classList.remove("hot");
            now=next;
    }
    function moveR() {
        next--;
        if (next<0){
            next=Box1.length-1;
        }
        Box1[next].style.left="-296px";
        animate(Box1[next],{left:0});
        animate(Box1[now],{left:296});
        SmallBox[next].classList.add("hot");
        SmallBox[now].classList.remove("hot");
        now=next;
    }
    ButtonLeft.onclick=function () {
        moveR();
    };
    ButtonRight.onclick=function () {
        moveL();
    };
    for (let i=0;i<SmallBox.length;i++){
        SmallBox[i].onclick=function () {
            if(now==i){
                return;
            }else if (i>now){
                Box1[i].style.left="296px";
                animate(Box1[i],{left:0});
                animate(Box1[now],{left:-296});
                SmallBox[i].classList.add("hot");
                SmallBox[now].classList.remove("hot");
                now=next=i;
            } else{
                Box1[i].style.left="-296px";
                animate(Box1[i],{left:0});
                animate(Box1[now],{left:296});
                SmallBox[i].classList.add("hot");
                SmallBox[now].classList.remove("hot");
                now=next=i;
            }
        }
    }

    // $(".lisi").hover(fuction(){
    //     $(this).css("display","none").eq(this.index).css("display","block");
    // },function () {
    //     $(this).css("display","none").eq(this.index).css("display","none");
    // });

    let lisi=document.querySelectorAll(".lisi");
    let lidiv=document.querySelectorAll(".Eject_01");
    console.log(lisi,lidiv);
    lisi.forEach(function (value,index) {
        value.onmouseenter=function () {
            lidiv[index].style.bottom="-201px";
            lidiv[index].style.height="201px";
            lidiv[index].style.zIndex="1000";
        }
        value.onmouseleave=function () {
            lidiv[index].style.bottom="0px";
            lidiv[index].style.height="0px";
            lidiv[index].style.zIndex="0";
        }


    })
}