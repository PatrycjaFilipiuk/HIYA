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






$(document).ready(function () {
  // Hide all sections initially
  $("section").hide();

  // Show only the home section at first
  $("#home").show();

  // Navigation click handler
  $(".side-menu a").click(function (e) {
    e.preventDefault();

    const target = $(this).attr("href");

    // Hide all sections
    $("section").hide();

    // Show the clicked section
    $(target).show();

    // Optionally close the menu (if mobile menu)
    $("#sideMenu").removeClass("open");
  });

  // Hamburger menu toggle (optional)
  $("#hamburger").click(function () {
    $("#sideMenu").toggleClass("open");
  });

  // Also allow footer icons (if they will be clickable in the same way)
  $(".footer-icon").click(function () {
    const alt = $(this).find("img").attr("alt").toLowerCase();
    const idMap = {
      home: "#home",
      search: "#search",
      appointments: "#appointments",
      profile: "#profile",
      support: "#support"
    };

    if (idMap[alt]) {
      $("section").hide();
      $(idMap[alt]).show();
    }
  });
});
