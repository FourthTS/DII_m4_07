function alert1() {
  alert("let me see ...");
}
function alert2() {
    alert("Hmmmmm you need to cancel");
  }
let ok = document.getElementById("ok");
ok.addEventListener("click", alert1);
let cencel = document.getElementById("cancel");
cancel.addEventListener("click", alert2);


let okButton = document.getElementById("ok");
okButton.addEventListener('click',function (e){
    alert("2+2=4")

})