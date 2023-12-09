var toolTip = document.querySelectorAll('.tool-tip');
document.addEventListener('mousemove', funHover, false);
function funHover(e) {
  for (var i=toolTip.length; i--;) {
    toolTip[i].style.transform = `translateX(${(e.pageX)/10 + 'px'})`;
  }
}