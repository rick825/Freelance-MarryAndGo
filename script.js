window.onscroll = function(){
	navscroll();
}


function navscroll(){
	var navtop = document.querySelector('.navtop');
	 if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
       navtop.classList.add('navtophide');
}else{
	navtop.classList.remove('navtophide');
}
}


const navopen = () => {
	const ham = document.querySelector('.ham');
	const nav = document.querySelector('.navlist');
	const backblack = document.querySelector('.backblacknav');
  

	ham.addEventListener('click',()=>{
		nav.classList.toggle('navopen');
		backblack.classList.toggle('backblacknavshow');
		
	});
}


navopen();