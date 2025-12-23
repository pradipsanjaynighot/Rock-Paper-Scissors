let userscore=0;
let compscore=0;
const draw=document.getElementById("backgroundmusic");
const msg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
//generate computer choice
const gencompchoice=()=>{
    const options=["rock","paper","paper"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame=()=>{
    console.log("Draw game");
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice->modular
const compchoice=gencompchoice();
console.log("computer choice=",compchoice);

const showwinnner=(userwin)=>{
    if(userwin){
        userscore++;
        console.log("you win!");
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        user.innerText=userscore;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        console.log("You lose");
        msg.innerText=`You lose  ${compchoice} beats ${userchoice}`;
        comp.innerText=compscore++;
        msg.style.backgroundColor="red";
    }
}

if(userchoice===compchoice)
{
    //draw game
drawgame();
msg.innerText="Game Draw";
// draw.play();
// draw.smooth=1;
}
else{
    let userwin=true;
    if(userchoice==="rock")
        //scissors,paper
        {
userwin=compchoice==="paper" ? false:true;
    }
    else if(userchoice==="paper")
        {
            //rock,scissors
userwin=compchoice==="scissors" ? false:true;
    }
    else{
//rock,paper
userwin=compchoice=="rock"?false:true;
    }  
showwinnner(userwin);
}
}

const choice=document.querySelectorAll(".choice");
choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
})