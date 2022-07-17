var header = document.getElementById("navigation");
var btns = header.getElementsByClassName("bar");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("servactive");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" servactive", "");
  }
  this.className += " servactive";
  });
}

