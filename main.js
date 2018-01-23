window.addEventListener("load",start);
var arr;
var isXOrZ=false;
var isGameDone=false;
var winner;
var count=1;

function start()
{
     arr=document.querySelectorAll(".btn");
    for(let i=0;i<arr.length;i++)
    {
        arr[i].addEventListener("click",print);
    
    }
}
 
function print()
 {
     var val=this.innerHTML;
   console.log(val);
     if(!val && !isGameDone )
     {
         this.innerHTML=isXOrZ?"O":"X";
         winner=this.innerHTML;
         isXOrZ=!isXOrZ;
         count++;
         console.log(count);
         gameOver();

     }
 }
var isNotBlank=(button)=>button.innerHTML?true:false;
var isSameVal=(one,two,three)=>{
    console.log("same val");
    return(one.innerHTML == two.innerHTML && one.innerHTML == three.innerHTML);
}
function isSameRow(one,two,three)
{
    if(isNotBlank(one) && isNotBlank(two) && isNotBlank(three))
    {console.log("not blnk");
        if(isSameVal(one,two,three))
        { console.log("same val returns");
            return true;
        }
           return false;
    }

}

function gameOver()
{
    console.log("game over");
    if(count<=10)
    {
    if(isSameRow(arr[0],arr[1],arr[2]))
    {
        console.log("game finish");

        isGameDone=true;
         win();
         playAgainbtn();
        document.querySelector("#msg").innerHTML="Game Over";
        document.querySelector("#msg").classList.add("trans");
    }
    if(isSameRow(arr[0],arr[3],arr[6]))
    {
        isGameDone=true;
        win();
        playAgainbtn();
        document.querySelector("#msg").innerHTML="Game Over";
        document.querySelector("#msg").classList.add("trans");
    }
    if(isSameRow(arr[0],arr[4],arr[8]))
    {
        isGameDone=true;
        win();
        playAgainbtn();
        document.querySelector("#msg").innerHTML="Game Over";
        document.querySelector("#msg").classList.add("trans");
    }
    if(isSameRow(arr[3],arr[4],arr[5]))
    {
        isGameDone=true;
        win();
        playAgainbtn();
        document.querySelector("#msg").innerHTML="Game Over";
        document.querySelector("#msg").classList.add("trans");
    }
    if(isSameRow(arr[6],arr[7],arr[8])){
        isGameDone=true;
        win();
        playAgainbtn();
        document.querySelector("#msg").innerHTML="Game Over";
        document.querySelector("#msg").classList.add("trans");
    }
    if(isSameRow(arr[1],arr[4],arr[7])){
        isGameDone=true;
        win();
        playAgainbtn();
        document.querySelector("#msg").innerHTML="Game Over";
        document.querySelector("#msg").classList.add("trans");
    }
    if(isSameRow(arr[2],arr[5],arr[8])){
        isGameDone=true;
        win();
        playAgainbtn();
        document.querySelector("#msg").innerHTML="Game Over";
        document.querySelector("#msg").classList.add("trans");
    }
    if(isSameRow(arr[2],arr[4],arr[6])){
        isGameDone=true;
        win();
        playAgainbtn();
        document.querySelector("#msg").innerHTML="Game Over";
        document.querySelector("#msg").classList.add("trans");
    }
    if(isGameDone==false && count==10)
    {
        isGameDone=true;
        document.querySelector("#msg").innerHTML="Game DRAW";
        document.querySelector("#msg").classList.add("trans");
        playAgainbtn();
    }
}


}
function win()
{
    if(isGameDone)
    {
        document.querySelector("#declare").innerHTML=`Winner Of The Game Is Player- ${winner}`;
    }
}
function playAgainbtn()
{
    
    if(isGameDone)
    { 
        console.log("play again");
        document.querySelector("#again").classList.add("pa");
        document.querySelector("#again").addEventListener("click",playAgain);
    }
}
function playAgain()
{
    document.querySelector("#declare").innerHTML="";
    document.querySelector("#again").classList.remove("pa");
    document.querySelector("#msg").innerHTML="";
    document.querySelector("#msg").classList.remove("trans");
    count=1;
    console.log(count);
    var resetarr=document.querySelectorAll(".btn");
        for(let j=0;j<resetarr.length;j++)
        {
            resetarr[j].innerHTML="";
        }
          isXOrZ=false;
         isGameDone=false;
         
        start();
}
