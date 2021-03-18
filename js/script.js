function openMenu(){
  $('.hamburger-menu').show();
}

function closeMenu(){
  $('.hamburger-menu').hide();
}

function init(){
  $('.fa-bars').click(function() {
    openMenu();
  });

  $('.close').click(function() {
    closeMenu();
  });
}

init()
