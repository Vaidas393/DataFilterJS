// Cycle to display all the images, add different class for all the divs, second div added for backround and filterDiv class to filter divs later on

// for(var i =1; i<= 9; i++){
//   document.getElementById("container").innerHTML += '<div id="workdiv" class=" filterDiv workdiv'+i+'"><img src="work images/'+i+'.jpg" alt=""><a id="workhref" href="">s</a><div class="after"></div></div>'
// }

// Loop for divs to add a specific class by witch we will filter
for(var i =1; i<= 9; i++){
  if(i==1 || i==6 || i==9){
      document.getElementById("container").innerHTML += '<div id="workdiv" class=" filterDiv  WEB workdiv'+i+'"><img src="work images/'+i+'.jpg" alt=""><a id="workhref" href="">s</a><div class="after"></div></div>'
    }
    if(i-3==0 || i%7==0) {

    document.getElementById("container").innerHTML += '<div id="workdiv" class=" filterDiv  DESIGN workdiv'+i+'"><img src="work images/'+i+'.jpg" alt=""><a id="workhref" href="">s</a><div class="after"></div></div>'
  }
    if(i==2 || i==5 || i==8) {

    document.getElementById("container").innerHTML += '<div id="workdiv" class=" filterDiv  FOTOGRAPHY workdiv'+i+'"><img src="work images/'+i+'.jpg" alt=""><a id="workhref" href="">s</a><div class="after"></div></div>'
  }
  if(i==4) {

  document.getElementById("container").innerHTML += '<div id="workdiv" class=" filterDiv  MUSIC workdiv'+i+'"><img src="work images/'+i+'.jpg" alt=""><a id="workhref" href="">s</a><div class="after"></div></div>'
}
}

// Filltering logic script
filterSelection("all")
function filterSelection(c) {
var x, i;
x = document.getElementsByClassName("filterDiv");
if (c == "all") c = "";
for (i = 0; i < x.length; i++) {
  w3RemoveClass(x[i], "show");
  if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
}
}

function w3AddClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
}
}

function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
  while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
  }
}
element.className = arr1.join(" ");
}

// Script to change active class for pushed button
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
}
