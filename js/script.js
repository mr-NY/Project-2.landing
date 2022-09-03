$(document).ready(function () {

   const mediaQuery = '(max-width: 667px)';
   const mediaQueryList = window.matchMedia(mediaQuery);

   function onAccordion() {
      $('.footer__list').css('display', 'none');//.slideToggle change inline-style ;(
      $('.footer__nav-title').click(function (event) {
         if (($(this)).hasClass('active')) {
            $('.footer__list').slideUp(300);
            $('.footer__nav-title').removeClass('active');
            return
         }

         $('.footer__list').slideUp(300);
         $('.footer__nav-title').removeClass('active');

         $(this).next().slideToggle({
            duration: 300,
            start: function () {
               $(this).css('display', 'flex');//without it .slideToggle return 'display: block'
            }
         });
         $(this).parent().children().toggleClass('active');
      });
   }

   function offAccordion() {
      $('.footer__nav-title').off('click');
      $('.footer__section').children().removeClass('active');
      $('.footer__list').css('display', 'flex');//.slideToggle change inline-style ;(
   }

   if (mediaQueryList.matches) {
      onAccordion();
   }
   mediaQueryList.addEventListener('change', function (event) {
      if (event.matches) {
         onAccordion();
      } else {
         offAccordion();
      }
   });

});