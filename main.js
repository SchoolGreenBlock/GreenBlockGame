const grid=document.getElementById("grid")
const x=grid.getElementsByTagName("button")

const b1=document.getElementById("b1")
const b2=document.getElementById("b2")
const b3=document.getElementById("b3")
const b4=document.getElementById("b4")
const b5=document.getElementById("b5")
const b6=document.getElementById("b6")

const b7=document.getElementById("b7")
const b8=document.getElementById("b8")
const b9=document.getElementById("b9")
const b10=document.getElementById("b10")
const b11=document.getElementById("b11")
const b12=document.getElementById("b12")

const b13=document.getElementById("b13")
const b14=document.getElementById("b14")
const b15=document.getElementById("b15")
const b16=document.getElementById("b16")
const b17=document.getElementById("b17")
const b18=document.getElementById("b18")

const b19=document.getElementById("b19")
const b20=document.getElementById("b20")
const b21=document.getElementById("b21")
const b22=document.getElementById("b22")
const b23=document.getElementById("b23")
const b24=document.getElementById("b24")

const b25=document.getElementById("b25")
const b26=document.getElementById("b26")
const b27=document.getElementById("b27")
const b28=document.getElementById("b28")
const b29=document.getElementById("b29")
const b30=document.getElementById("b30")

const b31=document.getElementById("b31")
const b32=document.getElementById("b32")
const b33=document.getElementById("b33")
const b34=document.getElementById("b34")
const b35=document.getElementById("b35")
const b36=document.getElementById("b36")


function closemenu(){
  document.querySelectorAll(".game-rules").forEach(function(el){
    if (el.style.display !="none"){
      el.style.display = "none"; // hide the element
    }else{
      el.style.display = "block";
    }
    
  });
};

let plnotlost = 1
const arrayButtons=[b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36];
let arraySorted=[]
let count = 1
var v1=0
var level = 1

let clickedButton;

function buttonClicked() {
  return new Promise(resolve => {
      arrayButtons.forEach(button => {
          button.addEventListener('click', function() {
              clickedButton = this;
              resolve(this);
          });
      });
  });
}


const Wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay*1000))

function startgame(){

  document.querySelectorAll(".game-rules-container").forEach(function(el){
    if (el.style.display !="none"){
      el.style.display = "none"; // hide the element
    }
    
  })
}

document.querySelector(".StartB").addEventListener("click", function() {
    plnotlost = 0; // change the value of the variable
    console.log("Startbutton foi clicked");
    loop()
});
        
async function loop(){
    while(plnotlost==0){
      if (level==count){
        randomB=arrayButtons[Math.floor(Math.random()*arrayButtons.length)]
        console.log(randomB)

    //for loop para guardar os butões randomizados

        for (i=v1; i<count; i++){
            arraySorted[i]=randomB
            console.log(arraySorted[i])
        }
        
    }

    //for loop para mudar cor dos butões
    if (arraySorted.length>0){
        for(i=0; i<arraySorted.length; i++){
          arraySorted[i].style.background = "Black"
          await Wait(1);
          arraySorted[i].style.background = "Green"
          await Wait(1);
        }

        for(i=0; i<arraySorted.length; i++){
            

            while(clickedButton==null){
              
              await Wait(buttonClicked())
            }
            console.log('Button clicked:', clickedButton);

            if (clickedButton != arraySorted[i]){
                  document.querySelectorAll("button").forEach(function(bg){
                    bg.style.background="red"
                  })
                  plnotlost=1
                  console.log(level)
                  break
            }
            clickedButton=null

          }
        
      }
    level+=1
    count+=1
    v1=v1+1

    //show level
    showlevel
  } 
}
       
