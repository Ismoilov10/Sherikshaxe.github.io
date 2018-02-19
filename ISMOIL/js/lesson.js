$(function(){
  
     /*$("body").on("keyup",".rakam", function(){
       
       var text = $("#text").val();

       $("li").css("background-color","white");
       $("li").each(function(){
         var thisl = $(this).html()

         if (thisl==text){
          $("li").hide()
         	$(this).show()
         }

       });

     });




      $("body").on("click",".player_row,.player_row_active",function(){
     var this_attr = $(this).attr("muzik");
     $(".player_row_active").attr("class","player_row");

     $(this).attr("class","player_row_active");

     $("#my_player").attr("src","audios/"+this_attr);
     $("#my_player")[0].play();
  
     });


     $("body").on("click",".player_row",function(){
       var udalit = confirm("Удалить????");
       if(udalit){
       	$(this).fadeOut(600)
       }

     }); 


*/



    $("body").on("click",".btn",function(){
       
       var random = Math.random()*4;
       var random = Math.floor(random)
       $(".box").css("background-color","green")
       $("#box_"+random).css("background-color","black")
});
$("body").on("click",".btn",function(){
    var words = ["Manchester City","Manchester United","Barcelona","Real Madrid","Arsenal","Chelsea","Bayern Munchёn","Juventus","PSG","Atletico Madrid","BVB	"]
       $("#word")
     var hisob = {
     	random:random
     }
            
      function random(rakam){
      	rakam = Math.random()*12;
      	rakam = Math.floor(rakam);
      	$(".word").html("Да "+words[rakam])
      }
      hisob.random(4)
      });  


                  var doIt = $(".btn").html()

            points();
            var timer = 0
            function points(){

            timer++

            if(timer==1){
              $(".btn").html($(".btn").html()+".")
              }
            if(timer==2){
              $(".btn").html($(".btn").html()+".")
              } 
              if(timer==3){
              $(".btn").html($(".btn").html()+".")
              }
              if(timer==4){
              $(".btn").html(doIt)
              timer=0
              } 

                setTimeout(points,650)
                }


                          //  LIGHTNING FUNCS //             
            lights()
            var lightstimer = 0
            function lights(){

            lightstimer++

            if(lightstimer==99999){
                lightstimer=0
            } 
            $(".lightbox").css("background-color","#"+lightstimer)
            setTimeout(lights,1)
            }


          $("body").on("click",".btn-danger",function(){    
              var input = $(".inputar").val();
              if(input=="224455"){
                $(".overlay").css("display","none")
              }else{
                $(".overlay").css("border","4px solid darkred")
              }
          })


});

