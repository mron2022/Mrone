/*---------------------------------------------------------------------------*/
const navItems = document.querySelector('.nav__items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');
//opens nav dropdown//
const openNav = () => {  
navItems.style.display = 'flex';
openNavBtn.style.display = 'none';
closeNavBtn.style.display =' inline-block';
}
//close nav dropdown 
const closeNav = () => {   
  navItems.style.display = 'none';
  openNavBtn.style.display =  'inline-block';
 closeNavBtn.style.display =' none';
}

closeNavBtn.addEventListener('click',closeNav);
openNavBtn.addEventListener('click',openNav);

const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');
// shows sidebar on small devices
const showSidbar = () => {
sidebar.style.left = '0' ;
showSidebarBtn.style.display = 'none' ;
hideSidebarBtn.style.display = 'inline-block' ;
}
// hide sidebar on small devices
const hideSidbar = () => {
sidebar.style.left = '-100%' ;
showSidebarBtn.style.display = 'inline-block' ;
hideSidebarBtn.style.display = 'none' ;
}
showSidebarBtn.addEventListener('click',showSidbar);
hideSidebarBtn.addEventListener('click',hideSidbar);

