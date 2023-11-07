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


const gamemenu=document.querySelectorAll(".game-rules")

const value1 =1

const elements = document.getElementsByClassName("CloseBmenu");


function closemenu(){
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0.7;
  }
  console.log("works")
  };



var brand=Math.floor(Math.random()*10)
console.log(brand)