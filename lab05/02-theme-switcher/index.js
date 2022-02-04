/*
    Hints:
    1. Attach click event handlers to all four of the
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag
       based on the button that was clicked.
*/


const todefault = () => {
  document.querySelector("body").classList.remove("ocean", "desert", "high-contrast");

}


const toocean = () => {
  document.querySelector("body").classList.remove("desert", "high-contrast");
  document.querySelector("body").classList.add("ocean");

}

const todesert = () => {
  document.querySelector("body").classList.remove("ocean", "desert", "high-contrast");
  document.querySelector("body").classList.add("desert");


}

const tohighcontrast = () => {
  document.querySelector("body").classList.remove("ocean", "desert", "high-contrast");
  document.querySelector("body").classList.add("high-contrast");
}


document.querySelector("#default").addEventListener('click',todefault);
document.querySelector("#ocean").addEventListener('click',toocean);
document.querySelector("#desert").addEventListener('click',todesert);
document.querySelector("#high-contrast").addEventListener('click',tohighcontrast);
