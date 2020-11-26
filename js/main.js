window.onscroll = function () {ToTopButton()};

function ToTopButton()
{
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    var toTopElem = document.querySelector("#totop");
    var toTop = document.createElement("a");
    toTop.innerHTML = "Вверх";
    toTop.setAttribute("class", "backtotop");
    toTop.setAttribute("href", "#top");
    toTopElem.appendChild(toTop);
  }
}