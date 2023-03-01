const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.burger__menu');
const exit = document.querySelector(".burger__menu__header__exit");
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    exit.classList.toggle('active'); 
});
exit.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    exit.classList.toggle('active'); 
});


/*new Vue ({
	el: '.hiddenBurger',
	data: {
		show: true
	},
});*/

