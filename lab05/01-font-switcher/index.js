

const makeBigger = () => {
  var head = document.querySelector("#head");
  var content = document.querySelector(".content");


   head.style.fontSize = "larger";
   content.style.fontSize = "larger";
};

const makeSmaller = () => {
  var head = document.querySelector("#head");
  var content = document.querySelector(".content");


   head.style.fontSize = "smaller";
   content.style.fontSize = "smaller";

};


document.getElementById("a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
