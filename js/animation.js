$(document).ready(function () {



function moveMenu(){
  if ($(window).width() < 768) {
         $(function(){ 

           
        })            
  } else{
         $(function(){ 

            
          $(document).ready(function() {
              setTimeout(function() {
                  $('.b-header-slider__item__left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInLeft',
                    offset: 0
                  });
              }, 1500); 
              setTimeout(function() {
                  $('.b-header-slider__item__right').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInRight',
                    offset: 0
                  });
              }, 1500); 
              setTimeout(function() {
                  $('.b-header-form').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1500); 
              setTimeout(function() {
                  $('.b-header-wrap').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1500); 
              setTimeout(function() {
                  $('.b-header-content__left').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1500); 
              setTimeout(function() {
                  $('.b-header-content__img').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1500);                                        
              setTimeout(function() {
                  $('section').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1500);
              setTimeout(function() {
                  $('.b-footer').addClass("animated").viewportChecker({
                    classToAdd: 'fadeInUp',
                    offset: 0
                  });
              }, 1500);           
          });
           
     })        
  }
}
moveMenu();

$(window).resize(function(){
    moveMenu();
});


});



