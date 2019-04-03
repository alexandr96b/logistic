$(document).ready(function () {

$(".btn-scroll").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});


var scrolledpx = parseInt($(window).scrollTop());
$(window).scroll( function (){

    scrolledpx = parseInt($(window).scrollTop()); 

    if(scrolledpx > 1530){
        $('.btn-scroll').addClass('active');
     } else if(scrolledpx < 1531){
      $('.btn-scroll').removeClass('active');
     }

    if(scrolledpx > 830){
        $('.b-header').addClass('active');
     } else if(scrolledpx < 831){
      $('.b-header').removeClass('active');
     }

  });


$('.b-partners-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  fade: false,
  variableWidth: false,
  adaptiveHeight: true,
  arrows: false,
  dots: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.b-foto-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '<button class="b-arrow b-arrow__next">→</button>',
  prevArrow: '<button class="b-arrow b-arrow__prev">←</button>',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.b-about-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  arrows: true,
  nextArrow: '<button class="b-arrow b-arrow__next">→</button>',
  prevArrow: '<button class="b-arrow b-arrow__prev">←</button>',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1560,
    settings: {
      slidesToShow: 1,     
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.b-prepack-next').on("click", function() {
    $('.b-prepack-slider__big').slick("slickNext"); 
})
$('.b-prepack-prev').on("click", function() {
    $('.b-prepack-slider__big').slick("slickPrev"); 
})

$('.b-prepack-slider__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false,
  asNavFor: '.b-prepack-slider__pager',
  responsive: [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});
$('.b-prepack-slider__pager').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  asNavFor: '.b-prepack-slider__big',
  focusOnSelect: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        variableWidth: false,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});




$(".b-nav a").click(function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
/*        header = $('.b-header').outerHeight();*/
    $('body,html').animate({scrollTop: top /*- header*/}, 700);
});






$('.menu-icon').click(function(){
  $('.b-header-right').toggleClass('active');
  $(this).toggleClass('active');
});


$(document).on('click', function(e) {
  if (!$(e.target).closest(".menu-icon , .b-header-right").length) {
    $('.b-header-right').removeClass('active');
    $('.menu-icon').removeClass('active');
  }
  e.stopPropagation();
});


$('.validate').each(function() {
    $(this).validate({

    rules: {
        name: {
            required: true
        },
        password: {
            required: true
        },
        rep_password: {
            required: true
        },                
        email: {
            required: true,
            email: true
        },
        phone: {
            required: true,
            minlength: 10
        },
  check: {
    required: true
  }
    },
    messages: {
        name: {
            required: "Заполните ваше имя"
        },
        email: {
            required: "Электронная почта обязательна к заполнению",
            email: "Введите корректную электронную почту"
        },
        password: {
            required: "Электронная почта обязательна к заполнению",
            password: "Введите пароль"
        },
        rep_password: {
            required: "Электронная почта обязательна к заполнению",
            rep_password: "Введите пароль"
        },                
        phone: {
            required: "Ваш номер телефона обязателен к заполнению",
    minlength: $.validator.format( "В номере телефона должно быть 10 цифр." ),
        },
        check: {
            required: "Пожалуйста, поставьте галочку соглашения с нашей политикой конфиденциальности"
        }
    },
errorPlacement: function(error, input) {
  error.insertBefore(input);
}
});
$.extend( $.validator.messages, {
      required: "Это поле необходимо заполнить.",
      remote: "Пожалуйста, введите правильное значение.",
      email: "Пожалуйста, введите корректный адрес электронной почты.",
      url: "Пожалуйста, введите корректный URL.",
      date: "Пожалуйста, введите корректную дату.",
      dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
      number: "Пожалуйста, введите число.",
      digits: "Пожалуйста, вводите только цифры.",
      creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
      equalTo: "Пожалуйста, введите такое же значение ещё раз.",
      extension: "Пожалуйста, выберите файл с правильным расширением.",
      maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
      minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
      rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
      range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
      max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
      min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
    });
});




 
// google maps

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 13,
        disableDefaultUI: true,

        // The latitude and longitude to center the map (always required)

        center: new google.maps.LatLng(57.923140, 56.123019), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#dbdbdb"},{"lightness":2}]},
        {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#dbdbdb"},{"lightness":1}]},
        {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":2}]},
        {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":2},{"weight":0.2}]},
        {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":2}]},
        {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":2}]},
        {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":2}]},
        {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#777777"},{"lightness":0.5}]},{"elementType":"labels.text.fill",
        "stylers":[{"saturation":1},{"color":"#777777"},{"lightness":1}]},{"elementType":"labels.icon",
        "stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry",
        "stylers":[{"color":"#ffffff"},{"lightness":1}]},
        {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":17},{"weight":1.2}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({ 
        position: new google.maps.LatLng(57.920978, 56.151657),
        map: map,
        title: 'Snazzy!',
                icon: {
                    url: "images/map.svg",
                    scaledSize: new google.maps.Size(28, 40),
                    labelOrigin: new google.maps.Point(145, 25, 5),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(36, 49)           
                }      

    });

}


});



