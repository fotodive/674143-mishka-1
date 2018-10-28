var toggle = document.querySelector('.main-nav__toggle');
var menuList = document.querySelector('.main-nav__list');
toggle.onclick = function (e) {
e.preventDefault();
toggle.classList.add("main-nav__toggle");
menuList.style.display = "block";
 };
