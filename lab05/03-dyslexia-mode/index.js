/*
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
var x = true;
const dyslexiamode = () => {
  // alert("xd");


  // document.querySelector("body").classList.add("dyslexia-mode");



  if(x == true){
    document.querySelector("body").classList.remove("dyslexia-mode");
    x = false;
  }
  else{
    document.querySelector("body").classList.add("dyslexia-mode");
    x = true;
  }
}


document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiamode);
