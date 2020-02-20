const htmlTag = document.querySelector('html');
const bodyTag = document.querySelector('body');
const myNav = document.getElementsByClassName('navbar');
const myHeadA = document.querySelector('nav a');
const myHeadB = document.querySelectorAll('nav li a');
const hoverHead = document.querySelector('nav div ul li a');

let scrolled = () => {
  let dec = scrollY / (bodyTag.scrollHeight - innerHeight);
  return Math.floor(dec * 100);
}

addEventListener('scroll', () => {
  let headHeight = document.getElementById('headBG').clientWidth;
  let headWidth = document.getElementById('headBG').clientHeight;
  let screenSize = innerWidth * 0.008;
  console.log(headHeight,scrolled())
  myNav[0].style.setProperty('background', scrolled() > screenSize ? "var(--color2)" : "var(--color1)", "important");
  myHeadA.style.setProperty('color', scrolled() > screenSize ? "var(--color3)" : "var(--color2)", "important");
  myHeadB.forEach(i => i.style.setProperty('color', scrolled() > screenSize ? "var(--color3)" : "var(--color2)", "important"));
  c = scrolled() > screenSize ? "var(--color5)" : "var(--color4)"
  let css = 'nav div ul li a:hover{ background-color: ' + c + ' !important }';
  let style = document.createElement('style');

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  hoverHead.appendChild(style);
})

let data = "Data manipulation,   Data modelling,  Data pipeline,  Data visualization ";
let iot = "DAQ programming, C, Assembly(ARMs), LabView ";
let python = "pandas, numpy, sklearn, GUI( tkinter, kivy), seaborn, matplotlib, tensorflow ";
let database = "DB2, MySQL, MSSQL ";
let webProgramming = "Html, Css, Javascript,React Native";
let other = "Git, Docker, MatLab";
$('#skills a').click(function(){
  console.log(eval($(this).children('div').attr('id')));
  $(this).children('img').toggleClass('active');
  currentSkill = eval($(this).children('div').attr('id'));
  if ($(this).children('div')[0].innerHTML == currentSkill){
    $(this).children('div')[0].innerHTML = ":"
    $(this).children('div').toggleClass('active');
  }
  else{
    $(this).children('div').toggleClass('active');
    $(this).children('div')[0].innerHTML = currentSkill;
  }

});
  
 
  