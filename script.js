const header = document.getElementById('scroll');
const shade = document.getElementById('roll');
const headerData = {
  artistName : header.querySelector('#name'),
  buttons : header.querySelector('.btn-group'),
}
const smallBar = document.getElementById('small');
smallBar.querySelector('.row .title h1').innerHTML = headerData.artistName.innerText;
smallBar.querySelector('.row .controls').innerHTML = headerData.buttons.innerHTML;


/**
* Scroll
*/
// init controller
const controller = new ScrollMagic.Controller();

// create a scene
const scene = new ScrollMagic.Scene({
  duration: '100%',
  offset: 75,  
  trigger: shade,
  triggerHook:0.5,
  reverse:true
})
.setClassToggle(header,'gofurther')
.addTo(controller); // assign the scene to the controller

window.addEventListener('scroll',function(e){
  //console.log(scene);  
});