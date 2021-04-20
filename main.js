//soluzione 1 (css)

/* $(function(){

  //quando clicco a figlio diretto di headerdestra
  $('.header-right > a').click(function(){

    //aggiungo la classe attiva ad hamburger
    $('.hamburger-menu').addClass('.active');

  });

  //quando clicco close
  $('.close').click(function(){

    //rimuovo la classe attiva da hamburger
    $('.hamburger-menu').removeClass('.active');

  })

}) */

//soluzione 2 (show/hide)

/* $(function(){

  //quando clicco a figlio diretto di headerdestra
  $('.header-right > a').click(function(){

    //show hamburger
    $('.hamburger-menu').show(500);

  });

  //quando clicco close
  $('.close').click(function(){

    //rimuovo la classe attiva da hamburger
    $('.hamburger-menu').hide(500);

  })

}) */

//soluzione 3 (fadein/fadeout)

$(function(){

  //quando clicco a figlio diretto di headerdestra
  $('.header-right > a').click(function(){

    //show hamburger
    $('.hamburger-menu').fadeIn();

  });

  //quando clicco close
  $('.close').click(function(){

    //rimuovo la classe attiva da hamburger
    $('.hamburger-menu').fadeOut();

  })

})