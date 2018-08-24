window.onload=function () {
    let Eject=document.getElementsByClassName("box_Eject")[0];
    console.log(Eject);
    let class5=document.getElementsByClassName("class5")[0];
    console.log(class5);
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
    console.log(blickBoxR);
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
    console.log(quanA);

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
    console.log(Prev,Next);
    
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





}