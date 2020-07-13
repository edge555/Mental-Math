var playing = false;
var score,second,finalAns,ans;
// click start/reset 
document.getElementById("startreset").onclick=function(){
    // if game running
    if(playing==true){
        location.reload();
    }
    else{
        playing=true;
        // set score to 0
        score = 0;
        document.getElementById("score").innerHTML="Score : "+score;
        // show timer
        show("time");
        show("score");
        // hide gameover
        hide("gameover");
        // toogle start/reset
        document.getElementById("startreset").innerHTML = "Reset";
        // decrease time by 1 every second
        countdown();
        // Genarate questions
        generatequs();
    }
} 

function countdown(){
    second = 15;
    document.getElementById("timer").innerHTML = second;
    action = setInterval(function(){
        second -= 1;
        document.getElementById("timer").innerHTML = second;
        if(second==0){
            // stop countdown
            clearInterval(action);
            // show game over
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over !</p> <p>Score : "+score+" </p>";
            hide("time");
            hide("score");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start";
        }
    },1000);
}

function show(id){
    document.getElementById(id).style.display = "block";
}
function hide(id){
    document.getElementById(id).style.display = "none";
}

function rand(min,max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
for(var i=1;i<=4;i++){
    document.getElementById("op"+i).onclick = function(){
        if(this.innerHTML==ans){
            score++;
            document.getElementById("score").innerHTML=score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            generatequs();
        }
        else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    };
}

function generatequs(){
    second=16;
  var lo=1,hi=100;
  var x=rand(lo,hi),y=rand(lo,hi);
  var sign=rand(0,4);
  if(sign>=3){
    while(y==0){
      y=rand(lo,hi);
    }
  }
  var ch=["+","-","*","/","%"];
  var res=[x+y,x-y,x*y,x/y,x%y];
  ans=res[sign];
  document.getElementById("qus").innerHTML = x+" "+ch[sign]+" "+y+" = ?";
  var diff=[rand(10,50),rand(10,50),rand(10,50),rand(10,50)];
  var op=[];
  for(var i=0;i<4;i++){
    var mn=rand(1,4);
    if(mn&1){
      op[i]=ans-diff[i];
    }
    else{
      op[i]=ans+diff[i];
    }
  }
  if(sign==3){
    ans=ans.toPrecision(4);
    for(i=0;i<4;i++){
      op[i]=op[i].toPrecision(4);
    }
  }
  finalAns=rand(0,3);
  op[finalAns]=ans;
  document.getElementById("op1").innerHTML = op[0];
  document.getElementById("op2").innerHTML = op[1];
  document.getElementById("op3").innerHTML = op[2];
  document.getElementById("op4").innerHTML = op[3];
}