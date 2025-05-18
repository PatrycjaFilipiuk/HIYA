// Patrycja JS CODE //

const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

// Toggle side menu open/close on hamburger click
hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

// Close side menu on clicking close logo
closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});

// Select all main content sections to toggle visibility
const sections = document.querySelectorAll('#home, #search, #appointments, #profile, #support');

// On clicking a menu link, hide all sections and show the targeted one, then close menu
sideMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href'); // e.g. '#home'

    // Hide all sections
    sections.forEach(section => {
      section.style.display = 'none';
    });

    // Show the selected section if exists
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.style.display = 'block';
    }

    // Close the side menu
    sideMenu.classList.remove('open');
  });
});

// Initially show only the home section, hide others
sections.forEach(section => {
  if (section.id === 'home') {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
});

const fadeEls = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop observing once visible
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // 10% visibility threshold
});

// Observe fade-in elements for animation
fadeEls.forEach(el => observer.observe(el));

/* Jude javascript */
$(document).ready(function() {
  $('#profile-view').show();
  $('#edit-profile-view').hide();

  $('#edit-profile-btn').click(function(){
    $('#profile-view').hide();
    $('#edit-profile-view').show();
  });

  $('#save-changes-btn').click(function(){
    $('#edit-profile-view').hide();
    $('#profile-view').show();
  });

  $("#darkMode").click(function() {
    $("body").toggleClass("bodyDark")
    $("#profile-view").toggleClass("profileDark")
    console.log("working")
  });
});

// Aleksandra's code
function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.style.right === "0px") {
    menu.style.right = "-250px";
  } else {
    menu.style.right = "0px";
  }
}

// Kierons code
//Button
$(document).ready(function () {
  $('#bigButton').click(function (e) {
    e.preventDefault();
    $('#initialView').hide();
    $('#warningView').show();
  });

  $('#confirmBtn').click(function (e) {
    e.preventDefault();
    $('#warningView').hide();
    $('#confirmedView').show();
  });

  $('#backBtn').click(function (e) {
    e.preventDefault();
    $('#confirmedView').fadeOut(500, function () {
      $('#initialView').fadeIn(500);
    });
  });
});
