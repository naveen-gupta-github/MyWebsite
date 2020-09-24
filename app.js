//selectors
const burger = document.querySelector('.burger');
const nav =   document.querySelector('nav');
const links = document.querySelectorAll('.nav_link');
const welcome = document.querySelector('.welcome');
const dismissBtn = document.querySelector('.dismiss');

const header = document.querySelector('header');
const intro = document.querySelector('.intro');
const skills = document.querySelector('.my_skills');
const aboutMe = document.querySelector('.about_me');
const myProjects = document.querySelector('.my_projects');
const footer = document.querySelector('footer');


const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

var burgerToggle = true;
//event-listeners

burger.addEventListener('click', handleBurger);

links.forEach(link=> { link.addEventListener('click', handleLink);});

dismissBtn.addEventListener('click', dismiss);

window.onload  = onloadHandle();

//functions

function handleBurger()
{
	nav.classList.toggle('nav_active');
	if(burgerToggle){
       line1.style.width = '25px'
	   line2.style.width = '20px';
	   line3.style.width = '15px';
	   burgerToggle = false;
	}else{

		line1.style.width = '35px'
	   line2.style.width = '35px';
	   line3.style.width = '35px';
	   burgerToggle = true;
	}
}

function handleLink(){nav.classList.remove('nav_active');}

function dismiss()
{
	welcome.style.display = 'none';
	header.style.opacity = '1';
	intro.style.opacity = '1';
	skills.style.opacity = '1';
	aboutMe.style.opacity = '1';
	myProjects.style.opacity = '1';
	footer.style.opacity = '1';
}

function onloadHandle()
{
	    header.style.opacity = '0.3';
		intro.style.opacity = '0.3';
		skills.style.opacity = '0.3';
		aboutMe.style.opacity = '0.3';
		myProjects.style.opacity = '0.3';
		footer.style.opacity = '0.3';
}