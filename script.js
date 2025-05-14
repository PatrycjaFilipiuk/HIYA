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
      })
  });
  