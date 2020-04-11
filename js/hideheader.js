var prevScrollpos = window.pageYOffset;
const  menubutton = document.getElementById('abutton');
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (!menubutton.checked) {
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerwrapper").style.top = "0";
  } else {
    document.getElementById("headerwrapper").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}
}
