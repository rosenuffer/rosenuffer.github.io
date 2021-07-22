

var display = document.getElementById("display");

var submitBtn = document.getElementById("submit");


if (submitBtn){
  console.log("the button is real")
  submitBtn.addEventListener("click", makeLetter);
}



function makeLetter(){
  console.log("make letter has run");
  var date = document.getElementById("date").value;
  var repName = document.getElementById("repName").value;
  var repAddress = document.getElementById("repAddress").value;
  var yourName = document.getElementById("yourName").value;
  var yourAddress = document.getElementById("yourAddress").value;
  var reasons = document.getElementById("reasons").value;

  display.innerHTML = date + "<br>The Honorable " + repName + "<br>" + repAddress + "<br>RE: Support SSI Restoration Act 2021 <br> Dear Congressman " + repName + ":<br>My name is " + yourName + " and I am a community member who resides in your district.<br>" + reasons + "<br>" + "I hope you agree that it is imperative that you support the 2021 SSI Restoration Act. <br> Sincerely, <br>" + yourName + "<br>" + yourAddress;
}