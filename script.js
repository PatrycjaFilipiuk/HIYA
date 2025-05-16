// Patrycja JS CODE //


const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');
 
hamburger.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});
 
closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('open');
});
 
const fadeEls = document.querySelectorAll('.fade-in');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stop view
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // 10% view
});




/* jude javascript */
 
fadeEls.forEach(el => observer.observe(el));

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
      })
  });
  

// Aleksandras code /
function toggleMenu() {
  const menu = document.getElementById("side-menu");
  if (menu.style.right === "0px") {
    menu.style.right = "-250px";
  } else {
    menu.style.right = "0px";
  }
}

// Kierons code //
//Button
$(document).ready(function() {
  $('#bigButton').click(function() {
    $('#initialView').hide();
    $('#warningView').show();
  });

  $('#confirmBtn').click(function() {
    $('#warningView').hide();
    $('#confirmedView').show();
  });

  $('#backBtn').click(function() {
    $('#confirmedView').fadeOut(500, function() {
      $('#initialView').fadeIn(500);
    });
  });
});






$(document).ready(function() {
  // Show home by default (you can also do this in HTML/CSS)
  $('#home').show();
  
  // Footer button click handler
  $('.footer-icon').click(function() {
    const section = $(this).data('section');

    // Hide all main sections
    $('#home, #search, #appointments, #profile, #support').hide();

    // Show the clicked section
    $('#' + section).show();

    // Optionally, add active class on clicked footer icon
    $('.footer-icon').removeClass('active');
    $(this).addClass('active');
  });

  // Optionally, highlight the first footer icon as active on load
  $('.footer-icon[data-section="home"]').addClass('active');
});
