/* 


    try {
         Variable declaration to get the element for styling 
      const displayNav = document.getElementById('openMenuBtn');
      const exitNav = document.getElementById('closeMenuBtn');
      const navOverlay = document.getElementById('sideNav');
      const mainContainer = document.getElementById('mainContainer');
      const myLogo = document.getElementsByClassName('logo');
 
 if statement to check if variables are assigned values and then add an event listener 
      if (displayNav) {  
       displayNav.addEventListener('click', openNav);}

      if (exitNav) {  
        exitNav.addEventListener('click', closeNav);}

 function to open and close the navigation menu 
      function openNav() {
       navOverlay.style.width = "250px";
       mainContainer.style.marginLeft = "250px";
       displayNav.style.display = 'none';
       myLogo[0].style.textAlign = 'center';
       myLogo[0].style.marginLeft = '.3rem';
    }

      function closeNav() {
       navOverlay.style.width = 0;
       mainContainer.style.marginLeft = "0";
       myLogo[0].style.textAlign = 'left';
       myLogo[0].style.marginLeft = '0';
       displayNav.style.display = 'block';}
    } catch (error) {
        console.log(error + 'Error in code');
    }

    /* scroll to top button 
const myButton = document.querySelector('button');
if (myButton) {
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

        console.log('Scroll top:', scrollTop);
        if (scrollTop > 50) {
            myButton.style.display = 'block'; // Show button
        } else {
            myButton.style.display = 'none'; // Hide button
        }
    })
    
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log('scrolling');
    }
       myButton.addEventListener('click', topFunction);
} */

       // JavaScript to handle sidenav open and close actions
document.addEventListener("DOMContentLoaded", function () {
    const sideNav = document.getElementById("sideNav");
    const openMenuBtn = document.getElementById("openMenuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");

    // Function to open the sidenav
    function openNav() {
        sideNav.style.width = "250px"; // Adjust the width as per your design
    }

    // Function to close the sidenav
    function closeNav() {
        sideNav.style.width = "0";
    }

    // Event listeners for buttons
    openMenuBtn.addEventListener("click", openNav);
    closeMenuBtn.addEventListener("click", closeNav);
});
