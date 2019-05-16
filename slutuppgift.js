
$( document ).ready(function() {


var upner=true;

  $(function(){
    $("#bu1").click(function(){


        if (upner==true){
          $('html, body').animate({
            scrollTop: $(".sist2").offset().top
          }, 2000);
            upner=false;

        }
        else{

          $('html, body').animate({
            scrollTop: $("#catDiv").offset().top-400
          }, 3000);
          upner=true;
          }
        });
      });
    });
