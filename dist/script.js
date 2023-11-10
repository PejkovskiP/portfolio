// Function to toggle the menu
function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");

  // Toggle styles directly on the menu icon
  var menuIcon = document.querySelector('.menu-icon');
  if (navLinks.classList.contains("show")) {
      menuIcon.style.backgroundColor = '#3A4D39'; // Change this to your menu background color
  } else {
      menuIcon.style.backgroundColor = ''; // Reset to default or remove this line if not needed
  }
}

// Close the hamburger menu when a navigation link is clicked
document.querySelectorAll('#nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // Close the hamburger menu
      var navLinks = document.getElementById("nav-links");
      navLinks.classList.remove("show");

      // Reset styles on the menu icon
      var menuIcon = document.querySelector('.menu-icon');
      menuIcon.style.backgroundColor = ''; // Reset to default or remove this line if not needed

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Close the hamburger menu when clicking outside the menu on small screens
document.addEventListener('click', function (e) {
  var navLinks = document.getElementById("nav-links");
  var menuIcon = document.querySelector('.menu-icon');
  if (window.innerWidth <= 768 && !menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("show");

      // Reset styles on the menu icon
      menuIcon.style.backgroundColor = ''; // Reset to default or remove this line if not needed
  }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use custom text for the caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("priorilist");
var captionText = document.getElementById("caption");
var modalCaption = document.getElementsByClassName("modal-caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = customCaption;
  modalCaption.innerHTML = modal-caption;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}