var left_color=document.getElementById('l').style.backgroundColor;
var right_color=document.getElementById('r').style.backgroundColor;
var nowL='#6cf';
var nowR='#9d0711';
var blinkState=0;
var lastPlay=0;
var iiint=300;

function updateColor(){
  if (blinkState==0){
    document.getElementById('l').style.backgroundColor=left_color;nowL=left_color;
    document.getElementById('r').style.backgroundColor=right_color;nowR=right_color;
  }
  else if (blinkState==1) {
    document.getElementById('l').style.backgroundColor='#000';nowL='#000';
    document.getElementById('r').style.backgroundColor=right_color;nowR=right_color;
  }
  else if (blinkState==2) {
    document.getElementById('l').style.backgroundColor=left_color;nowL=left_color;
    document.getElementById('r').style.backgroundColor=right_color;nowR=right_color;
  }
}

function changecolor(a,b){
  if (a=='left'){
    left_color=document.getElementById(b).value;
  }
  else{
    right_color=document.getElementById(b).value;
  }
  updateColor();
}


function play(){
  var d=new Date();
  if (d.getTime()-lastPlay>iiint){
    if(blinkState==0){
      document.getElementById('l').style.backgroundColor=left_color;nowL=left_color;
      document.getElementById('r').style.backgroundColor=right_color;nowR=right_color;
    }
    else{
      if (nowL==left_color) {
        document.getElementById('l').style.backgroundColor='#000';nowL='#000';
      }
      else{
        document.getElementById('l').style.backgroundColor=left_color;nowL=left_color;
      }
      if (nowR==right_color) {
        document.getElementById('r').style.backgroundColor='#000';nowR='#000';
      }
      else{
        document.getElementById('r').style.backgroundColor=right_color;nowR=right_color;
      }
    }
    lastPlay=d.getTime()
  }
}

document.getElementById('r-btn').onclick=function(){changecolor('right','r-in')};
document.getElementById('l-btn').onclick=function(){changecolor('left','l-in')};
document.getElementById('f-btn').onclick=function(){
  document.getElementById('set-ul').style.display='block';
};
document.getElementById('l').onclick=function (){
  document.getElementById('set-ul').style.display='none';
};
document.getElementById('r').onclick=function (){
  document.getElementById('set-ul').style.display='none';
};
document.getElementById('s-b-btn').onclick=function(){blinkState=2;updateColor();};
document.getElementById('c-b-btn').onclick=function(){blinkState=1;updateColor();};
document.getElementById('n-b-btn').onclick=function(){blinkState=0;updateColor();};
document.getElementById('int-btn').onclick=function(){iiint=Number(document.getElementById('int-in').value)};
setInterval("play()",10);
