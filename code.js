var playing = false;
var score;
var second;
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
    second = 5;
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

function generatequs(){
    
}