
var mythList = [
  "MYTH: All disabilities are obvious/all people with disabilities use a wheelchair. FACT: There are many so called invisible disabilities that you as an outside observer might not notice ", "MYTH 13: There is nothing one person can do to help eliminate the barriers confronting people with disabilities. FACT: Everyone can contribute to change. You can help remove barriers by: Understanding the need for accessible parking and leaving it for those who need it. Speaking up when negative words or phrases are used about disability. Accepting people with disabilities as individuals capable of the same needs and feelings as yourself, and hiring qualified disabled persons whenever possible", "MYTH 12: People with disabilities always need help. FACT: Many people with disabilities are independent and capable of giving help. If you would like to help someone with a disability, ask if he or she needs it before you act."
];

var myth = document.getElementById("myth");
var mythBtn = document.getElementById("mythBtn");
var count = 0;

if (mythBtn) {
  mythBtn.addEventListener("click", displayMyth);
}

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


function displayMyth() {
  myth.innerHTML = mythList[count];
  count++;
  if (count == mythList.length) {
    count = 0;
  }
}
