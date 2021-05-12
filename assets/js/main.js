/*-- Menu show  --*/
const showMenu =(toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    })
  }
}
showMenu('nav-toggle','nav-menu')

/*-- Active and revome menu --*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
  // Active link
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  // Remove menu mobile
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction));



/*--Carousel Words -- */
var words = ['Developer', 'Minimalist', 'People Oriented', 'Graphic Addicted', 'Dreamer', 'Creative', 'Ambitious', 'Video Editor', 'Content Creator' ];
var counter = 0;
var word = document.getElementById("carousel-words");
setInterval(update_carousel_words, 1500);
function update_carousel_words(){
  word.innerHTML = words[counter];
  counter ++;
  if(counter >= words.length){
    counter = 0;
  }
}

/*-- scroll reveal animation  --*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});


/*-- scroll home --*/
sr.reveal('.home_title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home_img',{delay: 400});
sr.reveal('.home_social-icon',{interval: 200});

/*-- scroll about--*/
sr.reveal('.about_img',{});
sr.reveal('.about_subtitle',{delay: 200});
sr.reveal('.about_text',{delay: 400});

/*-- scroll skills  --*/
sr.reveal('.skills_subtitle',{});
sr.reveal('.skills_text',{delay: 200});
sr.reveal('.skills_data',{interval: 200});
/*sr.reveal('.skills_img',{delay: 400})*/

/*-- scroll work  --*/
sr.reveal('.work_img',{interval: 200});

/*-- scroll contact --*/
sr.reveal('.contact_input',{interval: 200});
