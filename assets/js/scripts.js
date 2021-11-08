(function ($) {


/*-----------------------------------------------------------------------------*/
/*  Addiciona e remove classe ao clicar no menu hamburger
/*-----------------------------------------------------------------------------*/
$('.hamburger').on('click', function() {
  
  let menu_clicado = document.getElementById('m-hamburger').getAttribute('aria-expanded');
  // atrubui a logomarca a variavel
  let logo = $(".navbar-brand");
  logo.addClass("brand-white");

  // atrubui o elemento nav a variavel
  let navtopo = $(".navbar");
  navtopo.addClass("fixa-menu");
  
  if(menu_clicado=="true"){
    logo.removeClass("brand-white");
    navtopo.removeClass("fixa-menu");
  }
});

/*-----------------------------------------------------------------------------*/
/*  Controla exibição da mensagem do Zap na tela versão desktop
/*-----------------------------------------------------------------------------*/
let box_zap = $(".topo-wzap");
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 150){
      box_zap.addClass("scrolled-zap");

      // se for o final da página adiciona a classe
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        box_zap.removeClass("scrolled-zap");
      }else{
        box_zap.addClass("scrolled-zap");
      }     
      
    }else{
      box_zap.removeClass("scrolled-zap");
    }
});

/*-----------------------------------------------------------------------------*/
/*  Controla exibição da mensagem do Zap na tela versão mobile
/*-----------------------------------------------------------------------------*/
let box_zap_m = $(".topo-wzap");
$(window).scroll(function () {
    // se for o final da página adiciona a classe
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      box_zap_m.addClass("scrolled-zap-m");
    }else{
      box_zap_m.removeClass("scrolled-zap-m");
    }     
});



/*-----------------------------------------------------------------------------*/
/*  Controla navbar com aparecimento da logomarca
/*-----------------------------------------------------------------------------*/
// var header = $(".navbar");
// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 250) {
//         header.addClass("scrolled");
//         header.addClass("bg_navb");
//         header.removeClass("topper");
//     } else {
//         header.removeClass("scrolled");
//         header.removeClass("bg_navb");
//     }
// });


/*-----------------------------------------------------------------------------*/
/*  Rolagem suave de tela para os links de Ancora, ligados uma section com ID
/*-----------------------------------------------------------------------------*/
// $('a[href*="#m-"]:not([href="#m-"])').on('click', function() {
//   let target = $(this.hash);
//   //console.log(target.length);
//   if (target.length) {
//     $('html, body').animate({ scrollTop: target.offset().top }, 1000);
//     $('.navbar-collapse').collapse('hide');
//     return false;
//   }
// });


/*-----------------------------------------------------------------------------*/
/*  Adiciona slider no box Dicas
/*-----------------------------------------------------------------------------*/

// var swiper = new Swiper('.swiper-container', {
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

var swiper = new Swiper('.depoimentos-slider', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },  
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },    
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }  
});

/*-----------------------------------------------------------------------------*/
/*  Adiciona slider na galeria de fotos single tratamentos
/*-----------------------------------------------------------------------------*/
var swiper = new Swiper('.galery-slider', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
});

/*-----------------------------------------------------------------------------*/
/*  Adiciona slider em depoiemntos pagina a clinica
/*-----------------------------------------------------------------------------*/
var swiper = new Swiper('.wrap-depoimento', {
  slidesPerView: 1,
  spaceBetween: 0, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },     
});


/*-----------------------------------------------------------------------------*/
/*  Adiciona slider na dobra veja também single tratamentos
/*-----------------------------------------------------------------------------*/
var swiper = new Swiper('.vejatambem-slider', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },    
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  }  
});

/*-----------------------------------------------------------------------------*/
/*  Adiciona slider na área de agenda, página ensino
/*-----------------------------------------------------------------------------*/
var swiper = new Swiper('.agenda-slider', {
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 5,
    },    
    576: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 5,
    }
  }  
});

// ----------------------------------------------------------------
// adiciona a funcionalidade de ir para o topo ao abrir o menu colapse
// ----------------------------------------------------------------
$('.collapse').on('shown.bs.collapse', function (e) {

  $(this).prev().addClass('active');
  var $card = $(this).closest('.card');
  var $open = $($(this).data('parent')).find('.collapse.show');

  // altura do topo
  var additionalOffset = 200;

  if($card.prevAll().filter($open.closest('.card')).length !== 0){
        additionalOffset =  $open.height();
  }

  $('html,body').animate({
    scrollTop: $card.offset().top - additionalOffset
  }, 500);
});

$('.collapse').on('hidden.bs.collapse', function () {
  $(this).prev().removeClass('active');
});
// -------------------------------------------



/*-----------------------------------------------------------------------------*/
/*  Adiciona Animação AOS no scroll das páginas
/*-----------------------------------------------------------------------------*/

AOS.init({
  // faz as animações acontecerem somente uma vez
  once: true
});



})(jQuery);
