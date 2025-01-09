


    try {
        /* Variable declaration to get the element for styling */
      const displayNav = document.getElementById('openMenuBtn');
      const exitNav = document.getElementById('closeMenuBtn');
      const navOverlay = document.getElementById('sideNav');
      const mainContainer = document.getElementById('mainContainer');
      const myLogo = document.getElementsByClassName('logo');
 
/* if statement to check if variables are assigned values and then add an event listener */
      if (displayNav) {  
       displayNav.addEventListener('click', openNav);}

      if (exitNav) {  
        exitNav.addEventListener('click', closeNav);}

/* function to open and close the navigation menu */
      function openNav() {
       navOverlay.style.width = "250px";
       mainContainer.style.marginLeft = "250px";
       displayNav.style.display = 'none';
       myLogo[0].style.float = 'right';
    
    }

      function closeNav() {
       navOverlay.style.width = 0;
       mainContainer.style.marginLeft = "0";
       myLogo[0].style.float = 'none';

       displayNav.style.display = 'block';}


/* scroll to top button */

    } catch (error) {
        console.log(error + 'Error in code');
    }