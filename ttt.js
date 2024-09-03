// let b=document.querySelector(".box");
// const btn=(e)=>{
//     let b=document.querySelector(".box");
//     b.style.transform="scale(1,1)";
// };
// b.addEventListener("click",btn);
let buttons = document.querySelectorAll('.cell');
buttons.forEach((button) => {
    button.addEventListener('click',() =>{
        button.style.transform = "scale(1,1)";
    });
});
let reset = document.querySelector("#reset-button");
let newgame=document.querySelector("#new-game");
let msg=document.querySelector("#msg");
let msgCont=document.querySelector(".meg-cont hide");
const winPatterns=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let turnx=true;
buttons.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnx){
            box.innerText="x";
            box.style.color="red";
            turnx=false;
        }
        else{
            box.innerText="o";
            box.style.color="green";
            turnx=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disabled = ()=>{
    buttons.forEach((box)=>{
        box.disabled=true;
    });
};
const enable = ()=>{
    buttons.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
        msg.innerText="";
        box.style.transform ="";
    });
};
const showwinner = (win)=>{
    msg.innerText=`winner is ${win}`;
    // msg.style.display="block";
    disabled();
};
const checkWinner = ()=>{
    for(pattern of winPatterns){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     buttons[pattern[0]].innerText,
        //     buttons[pattern[1]].innerText,
        //     buttons[pattern[2]].innerText);
        let pos0=buttons[pattern[0]].innerText;
        console.log(pos0);
        let pos1=buttons[pattern[1]].innerText;
        console.log(pos1);
        let pos2=buttons[pattern[2]].innerText;
        console.log(pos2);

        if(pos0 != "" && pos1 != "" && pos2 != ""){
            if(pos0==pos1 && pos1==pos2){
                console.log("Winner");
                showwinner(pos0);
            };
                
        };
    };
};
const resetGame=()=>{
    turnx=true;
    enable();   
};
reset.addEventListener("click",resetGame);
newgame.addEventListener("click",resetGame);
