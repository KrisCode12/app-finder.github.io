logobt=document.querySelector("#logo");
var audio = document.createElement("audio");

logobt.addEventListener("click", ()=>{
    window.location.href="index.html";
    console.log("hello");
})





function featuredanimePLAYER(){
let trailer1=document.querySelector(".featured-anime-container");
trailer1.addEventListener("mouseover", ()=>{

  playtrailer=document.querySelector(".trailer1");
  playtrailer.style.opacity="1";
  playtrailer.play();
})
}

/*const trailer = document.querySelectorAll(".trailer2"); CONST
for (const number of trailer) {

    number.addEventListener("mouseover", autoplayVideo);
    function autoplayVideo(){
        number.play();
    }
    number.addEventListener("mouseleave", ()=>{
        number.pause();
        number.currentTime = 0;
        number.load();
    })
  }*/

/*const trailer = document.querySelectorAll(".trailer2"); LET
for(let i=0; i<trailer.length; i++){
    trailer[i].addEventListener("mouseover", autoplayVideo);
    function autoplayVideo(){
        trailer[i].play();
    }
    trailer[i].addEventListener("mouseleave", ()=>{
        trailer[i].pause();
        trailer[i].currentTime = 0;
        trailer[i].load();
  })
  }
*/




featuredanimePLAYER();



