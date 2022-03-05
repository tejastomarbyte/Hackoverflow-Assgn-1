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
       $(".play-again").css("visibility","hidden");
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
     console.log(headingColor);
     $('.r-1').click(function(){
            if(this.classList[2]===guess)
            {   var back=$(`.bt-${headingColor}`).css("background-color");
                
                this.style.visibility="visible";
                $('.r-1').css("visibility","visible");
                $('.r-1').css("background-color",this.style.backgroundColor);
                document.querySelector(".header").style.backgroundColor=back;
                $(".play-again").css("visibility","visible");
                $(".box-colors").css("display","flex");
                $(".box-colors").unbind("click");
            }

            else{
                 $(this).css("visibility","hidden");
            }
     });
     
     //   $(".new-color").click(function(){
     //          for(let i=1;i<=3;i++)
     //          {   const btnx=document.querySelector('.bt-'+i);
     //              const red=Math.floor(Math.random()*255);
     //              const green=Math.floor(Math.random()*255);
     //              const blue=Math.floor(Math.random()*255);
     //           if(i==headingColor)
     //           {
     //                document.querySelector('.colors').innerText=`rgb(${red},${green},${blue})`;
     //           }
     //           btnx.style.backgroundColor=`rgb( ${red}, ${green}, ${blue} )`;
     //           //     console.log(btnx);
     //           }
     //           $('.r-1').click(function(){
     //        if(this.classList[2]===guess)
     //        {   var back=$(`.bt-${headingColor}`).css("background-color");
                
     //            this.style.visibility="visible";
     //            $('.r-1').css("visibility","visible");
     //            $('.r-1').css("background-color",this.style.backgroundColor);
     //            document.querySelector(".header").style.backgroundColor=back;
     //            $(".box-colors").css("display","flex");
     //            $(".box-colors").unbind("click");
     //        }

     //        else{
     //             $(this).css("visibility","hidden");
     //        }
     // });
     //   })
       
}
function hardlevel(){
     document.querySelector('.row-2').style.display='flex';
     $(".play-again").css("visibility","hidden");
     // // select all the colors
     // $(".box-colors").css("visibility","visible");
     // const headingColor=Math.floor(Math.random()*6)+1;
     // const guess=`bt-${headingColor}`;
     // // console.log(allbuttons);
     // for(let i=1;i<=6;i++)
     // {   const btnx=document.querySelector('.bt-'+i);
     //     const red=Math.floor(Math.random()*255);
     //     const green=Math.floor(Math.random()*255);
     //     const blue=Math.floor(Math.random()*255);
     //     if(i==headingColor)
     //     {
     //          document.querySelector('.colors').innerText=`rgb(${red},${green},${blue})`;
     //     }
     //     btnx.style.backgroundColor=`rgb( ${red}, ${green}, ${blue} )`;
     
     // }
     // $('.box-colors').click(function(){
     //        if(this.classList[2]===guess)
     //        {   var back=$(`.bt-${headingColor}`).css("background-color");
                 
     //            document.querySelector(".header").style.backgroundColor=back;
     //            $(".box-colors").css("display","flex");

     //            $(".r-1,.r-2").css("visibility","visible");

     //        }

     //        else{
     //             $(this).css("visibility","hidden");
     //        }
     // });
     $(".box-colors").css("visibility","visible");
     const randomNumber=Math.floor(Math.random()*6)+1;
     const randomButton=`bt-${randomNumber}`;
     console.log(randomNumber);
     for(let i=1;i<=6;i++)
     {
         const btnx=document.querySelector('.bt-'+i);  //selecting the button
         const red=Math.floor(Math.random()*255);
         const green=Math.floor(Math.random()*255);
         const blue=Math.floor(Math.random()*255);
         if(i===randomNumber)
         {
              document.querySelector(".colors").innerText=`rgb(${red},${green},${blue})`;
         }
         btnx.style.backgroundColor=`rgb(${red},${green},${blue})`;
     }
     $(".box-colors").click(function(){
          if(this.classList[2]===randomButton)
          {//  {   document.querySelector(`.bt-${randomNumber}`).style[0]="visible";
               var back=$(`.bt-${randomNumber}`).css("background-color");
               $(".box-colors").css("visibility","visible");
               $(".box-colors").css("background-color",this.style.backgroundColor);
               document.querySelector(".header").style.backgroundColor=back;
               $(".play-again").css("visibility","visible");
               $(".box-colors").unbind("click");
          }
          else{
               this.style.visibility="hidden";
          }
        
     })
      
     // $(".new-color").click(function(){
     //      for(let i=1;i<=6;i++)
     // {
     //     const btnx=document.querySelector('.bt-'+i);  //selecting the button
     //     const red=Math.floor(Math.random()*255);
     //     const green=Math.floor(Math.random()*255);
     //     const blue=Math.floor(Math.random()*255);
     //     if(i===randomNumber)
     //     {
     //          document.querySelector(".colors").innerText=`rgb(${red},${green},${blue})`;
     //     }
     //     btnx.style.backgroundColor=`rgb(${red},${green},${blue})`;
     // }
     // console.log(randomNumber);
     // $(".box-colors").click(function(){
     //      if(this.classList[2]===randomButton)
     //      {//  {   document.querySelector(`.bt-${randomNumber}`).style[0]="visible";
     //           var back=$(`.bt-${randomNumber}`).css("background-color");
     //           $(".box-colors").css("visibility","visible");
     //           $(".box-colors").css("background-color",this.style.backgroundColor);
     //           document.querySelector(".header").style.backgroundColor=back;
     //           $(".box-colors").unbind("click");
     //      }
     //      else{
     //           this.style.visibility="hidden";
     //      }
        
     // })
     // })


}
function colorchangelevel()
{   $(".play-again").css("visibility","hidden");
    $(".r-1").css({"visibility":"visible","background-color":"white"});
    $(".r-2").css({"visibility":"visible","background-color":"white"});
    $(".box-colors").css("display","flex");
    $(".header").css("background-color",`rgba(224, 15, 8, 0.692)`);
    
     
}