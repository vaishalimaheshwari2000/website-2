const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
document.querySelector('.dropDown-menu').style.display = 'none';
hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 900) {
    document.querySelector('.menu-see').style.display = 'none';
    document.querySelector('.dropDown-menu').style.display = 'block';
    document.querySelector('.dropdown-content').style.display = 'none';
  }
  else
   {
    document.querySelector('.dropDown-menu').style.display = 'none';
    document.querySelector('.menu-see').style.display = 'block';
   }
});
function changeImage() {
  const dropbtn = document.querySelector('.dropbtn');
  dropbtn.src = './public/close-icon.png';
  
  document.querySelector('.dropdown-content').style.display = 'block';
 
  dropbtn.addEventListener('click', (event)=>{
    console.log('dropdown');
    dropbtn.src = './public/dropDown-img.png';
    document.querySelector('.dropdown-content').style.display = 'none';
  });
}
