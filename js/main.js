//loader

$(window).on("load",function(){
    
 $(".loader .inner").fadeOut(500,function(){
    $(".loader").fadeOut(750); 
     
 });   
});


$(document).ready(function(){
  
    //superslides
    $('#slides').superslides({
     animation:'fade',
     play:'4000',
     pagination:false
       
   });
   
   //typed.js
   
   var typed = new Typed(".typed", {
  
  strings: ["App Developer", "Web Developer"],
  loop:true,
  showCursor:false,
  typeSpeed:50,
  startDelay:1000
  
  
});

//owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
//easy pie chart

      var skillsTopOffset=$('.skillSection').offset().top;
      $(window).scroll(function(){
          if(window.pageYOffset > skillsTopOffset - $(window).height()+200){
              
      $('.chart').easyPieChart({
      easing:'easeInOut',
      barColor:'#fff',
      trackColor:false,
      scaleColor:false,
      lineWidth:'4',
      size:'152',
      OnStep:function(from,to,percent){
          $(this.el).find('.percent').text(Math.round(percent)); 
      }   
          
      });
      
       }     
        });
    
    
 //fancy apps

$("[data-fancybox]").fancybox();

//isotope

$('.items').isotope({
filter:'*',
animationOptions:{
    easing:'linear',
    duration:'1500',
    queue:false
}

});

//sort & Filtering
$('.filters a').click(function(){
 $('.filters a').removeClass('current');  
 $(this).addClass('current');
 
 var selector=$(this).attr('filter-data');
   $('.items').isotope({
    filter:selector,
    animationOptions:{
    easing:'linear',
    duration:'1500',
    queue:false
}

});
    
 return false;   
});

//scroll animation

$("#navigation li a").click(function(e){
   e.preventDefault();
   var targetElement=$(this).attr("href");
   var targetPosition=$(targetElement).offset().top;
   $("html,body").animate({scrollTop: targetPosition -50},"slow" );
   
   
    
});


});