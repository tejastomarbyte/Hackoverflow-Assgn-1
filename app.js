//selecting buttons
const easyLevelButton=document.querySelector('.btn-2');
const hardLevelButton=document.querySelector('.btn-3');
const newColorsButton=document.querySelector('.btn-1');
//add event listeners
easyLevelButton.addEventListener('click',easylevel);
hardLevelButton.addEventListener('click',hardlevel);
newColorsButton.addEventListener('click',colorchangelevel);

//functions

function easylevel()
{    document.querySelector('.row-2').style.display='none'; 
       // select all the colors
     const headingColor=Math.floor(Math.random()*3)+1;
     const guess=`bt-${headingColor}`;
     // console.log(guess);
     // console.log(guess);
     for(let i=1;i<=3;i++)
     {   const btnx=document.querySelector('.bt-'+i);
         const red=Math.floor(Math.random()*255);
         const green=Math.floor(Math.random()*255);
         const blue=Math.floor(Math.random()*255);
         if(i==headingColor)
         {
              document.querySelector('.colors').innerText=`rgb(${red},${green},${blue})`;
         }
         btnx.style.backgroundColor=`rgb( ${red}, ${green}, ${blue} )`;
     //     console.log(btnx);
     }
     
     $('.r-1').click(function(){
            if(this.classList[2]===guess)
            {   var back=$(`.bt-${headingColor}`).css("background-color");
                 
                document.querySelector(".header").style.backgroundColor=back;
                $(".box-colors").css("display","flex");

                

            }

            else{
                 $(this).css({"display":"none"});
            }
     });
     

}
function hardlevel(){
     document.querySelector('.row-2').style.display='flex';
     // select all the colors
     const headingColor=Math.floor(Math.random()*6)+1;
     // console.log(allbuttons);
     for(let i=1;i<=6;i++)
     {   const btnx=document.querySelector('.bt-'+i);
         const red=Math.floor(Math.random()*255);
         const green=Math.floor(Math.random()*255);
         const blue=Math.floor(Math.random()*255);
         if(i==headingColor)
         {
              document.querySelector('.colors').innerText=`rgb(${red},${green},${blue})`;
         }
         btnx.style.backgroundColor=`rgb( ${red}, ${green}, ${blue} )`;
     //     console.log(btnx);
     }
}


function colorchangelevel()
{    $(".box-colors").css("display","flex");
     $(".btn-1").click(function(){
        $(".header").css("background-color","rgba(224, 15, 8, 0.692)");
     });
     
}